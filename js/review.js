import {review as baseReview} from './review-data.js?v=20261019-1';
import {extraQuestions,extraExercises} from './review-extra.js?v=20261019-1';
const review={...baseReview,questions:[...baseReview.questions,...extraQuestions],exercises:[...baseReview.exercises,...extraExercises]};
import {caseBank} from './case-bank.js?v=20261019-1';

const $=id=>document.getElementById(id);
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const codeBlock=(code,label)=>code?`<figure class="review-code"><figcaption>${esc(label)}</figcaption><pre><code>${esc(code)}</code></pre></figure>`:'';
const normalize=text=>text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const key='weblab-preparcial-v1';
let saved={answers:{},reviewed:{}};
try {
  const data=JSON.parse(localStorage.getItem(key)||'null');
  if(data?.version===1){
    const ids=[...caseBank.map(c=>c.id),...review.exercises.map((_,i)=>`ejercicio-${i+1}`)];
    for(const id of ids){
      if(typeof data.answers?.[id]==='string') saved.answers[id]=data.answers[id];
      if(data.reviewed?.[id]===true) saved.reviewed[id]=true;
    }
  }
}catch{storageNotice('El navegador no pudo recuperar las respuestas guardadas. Puedes trabajar durante esta visita.');}
function storageNotice(text){$('review-storage').textContent=text;}
function save(){
  try{localStorage.setItem(key,JSON.stringify({version:1,...saved}));}
  catch{storageNotice('No se pudieron guardar los últimos cambios. Las respuestas siguen en esta visita, pero podrían perderse al recargar.');}
}
function metrics(){
  $('exercise-written').textContent=`${review.exercises.filter((_,i)=>saved.answers[`ejercicio-${i+1}`]?.trim()).length} de 50 ejercicios con respuesta escrita`;
  $('case-written').textContent=`${caseBank.filter(c=>saved.answers[c.id]?.trim()).length} respuestas escritas`;
  $('case-reviewed').textContent=`${caseBank.filter(c=>saved.reviewed[c.id]).length} de 50 revisados`;
}

// 50 questions: lock only after choosing; show correction in text and color.
let questionIndex=0,diagnosticAnswers=[];
function startDiagnostic(){
  questionIndex=0;diagnosticAnswers=[];
  $('diagnostic-welcome').hidden=true;$('diagnostic-results').hidden=true;
  $('diagnostic-question').hidden=false;drawQuestion();
  $('diagnostic-question').querySelector('h3').focus();
}
function drawQuestion(){
  const q=review.questions[questionIndex];
  $('diagnostic-question').innerHTML=`<div class="diag-meta"><span>Pregunta ${questionIndex+1} de ${review.questions.length}</span><span>${esc(q.b)} · ${esc(review.blocks[q.b])}</span></div><h3 tabindex="-1">${esc(q.q)}</h3><div class="diag-options">${q.o.map((option,i)=>`<button type="button" class="diag-option" data-answer="${i}"><b aria-hidden="true">${'ABCD'[i]}</b><span>${esc(option)}</span></button>`).join('')}</div><div id="diagnostic-feedback" role="status"></div><button class="button primary" id="diagnostic-next" type="button" hidden>${questionIndex===review.questions.length-1?'Ver resultado':'Siguiente pregunta →'}</button>`;
  $('diagnostic-question').querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{
    if(diagnosticAnswers[questionIndex]!==undefined)return;
    const chosen=Number(button.dataset.answer),correct=chosen===q.c;
    diagnosticAnswers[questionIndex]=chosen;
    $('diagnostic-question').querySelectorAll('[data-answer]').forEach(option=>{
      const i=Number(option.dataset.answer);option.disabled=true;
      if(i===q.c)option.classList.add('correct');
      else if(i===chosen)option.classList.add('wrong');
    });
    $('diagnostic-feedback').className=`diag-feedback ${correct?'correct':'wrong'}`;
    $('diagnostic-feedback').innerHTML=`<p><strong>${correct?'Correcto.':'Esta respuesta no es correcta.'}</strong></p><p>Respuesta correcta: ${esc(q.o[q.c])}</p><p>${esc(q.e)}</p>`;
    $('diagnostic-next').hidden=false;
  });
  $('diagnostic-next').onclick=()=>{
    questionIndex++;
    if(questionIndex===review.questions.length)showResults();
    else{drawQuestion();$('diagnostic-question').querySelector('h3').focus();}
  };
}
function showResults(){
  const total=review.questions.filter((q,i)=>diagnosticAnswers[i]===q.c).length;
  $('diagnostic-question').hidden=true;$('diagnostic-results').hidden=false;
  $('diagnostic-results').innerHTML=`<h3 tabindex="-1">${total} de ${review.questions.length} respuestas correctas · ${Math.round(total/review.questions.length*100)} %</h3><p>Usa el resultado para decidir qué repasar. El porcentaje resume este diagnóstico; no demuestra por sí solo que ya dominas todas las aplicaciones del bloque.</p><div class="diag-map">${Object.entries(review.blocks).map(([block,title])=>{
    const indices=review.questions.map((q,i)=>q.b===block?i:-1).filter(i=>i!==-1);
    const correct=indices.filter(i=>diagnosticAnswers[i]===review.questions[i].c).length;
    return `<div><span>${esc(block)} · ${esc(title)}</span><strong>${correct} / ${indices.length} correctas</strong></div>`;
  }).join('')}</div><div class="hero-actions"><button class="button secondary" id="diagnostic-retry" type="button">Repetir diagnóstico</button><a class="button primary" href="#casos">Aplicarlo en los casos</a></div>`;
  $('diagnostic-retry').onclick=startDiagnostic;$('diagnostic-results').querySelector('h3').focus();
}
$('diagnostic-start').onclick=startDiagnostic;

// Fifty exercises, five per page; stable IDs preserve existing seven answers.
const exercises=review.exercises.map((exercise,i)=>({...exercise,id:`ejercicio-${i+1}`,number:i+1}));
let exercisePage=0;
for(const [block,title] of Object.entries(review.blocks)){
  const option=document.createElement('option');option.value=block;option.textContent=`${block} · ${title}`;$('exercise-block').append(option);
}
function renderExercises(){
  const query=normalize($('exercise-search').value.trim()),block=$('exercise-block').value;
  const filtered=exercises.filter(e=>(block==='all'||e.b===block)&&(!query||normalize([e.t,e.enun,...e.req].join(' ')).includes(query)));
  const pages=Math.max(1,Math.ceil(filtered.length/5));exercisePage=Math.min(Math.max(exercisePage,0),pages-1);
  $('exercise-count').textContent=`${filtered.length} de 50 ejercicios`;
  $('exercise-page').textContent=`Página ${exercisePage+1} de ${pages}`;
  $('exercise-prev').disabled=exercisePage===0;$('exercise-next').disabled=exercisePage===pages-1;
  $('exercise-list').innerHTML=filtered.length?filtered.slice(exercisePage*5,(exercisePage+1)*5).map(exercise=>{
    const id=exercise.id;
    return `<details class="review-exercise"><summary>Ejercicio ${String(exercise.number).padStart(2,'0')} · ${esc(exercise.t)}</summary><p class="eyebrow">${esc(review.blocks[exercise.b])}</p><p>${esc(exercise.enun)}</p><h4>Tu solución debe incluir</h4><ul>${exercise.req.map(item=>`<li>${esc(item)}</li>`).join('')}</ul><label class="review-answer-label" for="answer-${id}">Mi código y explicación</label><textarea class="review-answer" id="answer-${id}" data-response="${id}" spellcheck="false" placeholder="Escribe tu propuesta antes de abrir la referencia…">${esc(saved.answers[id]||'')}</textarea><details class="review-solution"><summary>Ver solución explicada</summary>${codeBlock(exercise.sol,`${exercise.lng} · CÓDIGO DE REFERENCIA`)}<h4>Por qué funciona y qué comprobar</h4><p>${esc(exercise.why)}</p><p class="review-help">Compara el requisito, el resultado y las condiciones; no basta con que el código se parezca.</p></details></details>`;
  }).join(''):'<p class="case-empty">No hay ejercicios con estos filtros. Prueba otro texto o bloque.</p>';
}
for(const id of ['exercise-search','exercise-block']) $(id).addEventListener(id==='exercise-search'?'input':'change',()=>{exercisePage=0;renderExercises();});
function exerciseFocus(){ $('exercise-list').querySelector('summary')?.focus(); }
$('exercise-prev').onclick=()=>{exercisePage--;renderExercises();exerciseFocus();};
$('exercise-next').onclick=()=>{exercisePage++;renderExercises();exerciseFocus();};
renderExercises();

// Fifty cases, stable IDs, five per page. Filtering never discards answers.
for(const [value,title] of Object.entries(review.blocks)){
  const option=document.createElement('option');option.value=value;option.textContent=`${value} · ${title}`;$('case-block').append(option);
}
let page=0;
const pageSize=5;

function filteredCases(){
  const query=normalize($('case-search').value.trim()),block=$('case-block').value,status=$('case-status').value;
  return caseBank.filter(c=>(block==='all'||c.block===block)&&(!query||normalize([c.id,c.title,c.scenario,c.task,c.code,review.blocks[c.block]].join(' ')).includes(query))&&(status==='all'||status==='pending'&&!saved.reviewed[c.id]||status==='reviewed'&&saved.reviewed[c.id]||status==='written'&&saved.answers[c.id]?.trim()));
}
function renderCases(){
  const cases=filteredCases(),pages=Math.max(1,Math.ceil(cases.length/pageSize));page=Math.min(Math.max(page,0),pages-1);
  const shown=cases.slice(page*pageSize,(page+1)*pageSize);
  $('case-count').textContent=cases.length?`${cases.length} de 50 casos · mostrando ${page*pageSize+1}–${page*pageSize+shown.length}`:'0 de 50 casos con estos filtros';
  $('case-page').textContent=`Página ${page+1} de ${pages}`;$('case-prev').disabled=page===0;$('case-next').disabled=page===pages-1;$('case-random').disabled=!cases.length;
  $('case-list').innerHTML=shown.length?shown.map(c=>`<article class="case-card" id="${c.id}"><div class="case-meta"><span>${esc(c.id.replace('caso-','CASO '))} / ${esc(c.block)}</span><span>${esc(review.blocks[c.block])}</span></div><h3 tabindex="-1">${esc(c.title)}</h3><p>${esc(c.scenario)}</p>${codeBlock(c.code,'PUNTO DE PARTIDA · ANALIZA ANTES DE CORREGIR')}<p class="case-task"><strong>Tu reto:</strong> ${esc(c.task)}</p><label class="review-answer-label" for="answer-${c.id}">Mi diagnóstico, propuesta y forma de comprobarla</label><textarea class="review-answer" id="answer-${c.id}" data-response="${c.id}" placeholder="1. Qué ocurre. 2. Qué haría y por qué. 3. Cómo lo comprobaría.">${esc(saved.answers[c.id]||'')}</textarea><details class="review-solution"><summary>Ver solución razonada · ${esc(c.id.replace('caso-','caso '))}</summary><h4>Una forma de responder</h4><ol>${c.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol>${codeBlock(c.fixed,'POSIBLE CORRECCIÓN · REQUIERE EL CONTEXTO DEL CASO')}<div class="case-check"><strong>Cómo comprobarlo:</strong> ${esc(c.check)}</div><p class="review-help">Es una referencia, no una respuesta única. Un planteamiento distinto puede ser válido si resuelve el caso y justificas sus condiciones.</p></details><label class="case-reviewed-label"><input type="checkbox" data-reviewed="${c.id}" ${saved.reviewed[c.id]?'checked':''}><span>Ya puedo explicar este caso con mis palabras.</span></label></article>`).join(''):'<div class="case-empty"><h3>No hay casos con esta combinación.</h3><p>Cambia la búsqueda, el bloque o el estado. Tus respuestas se conservan aunque un caso no aparezca aquí.</p></div>';
  metrics();
}
function focusCase(){const heading=$('case-list').querySelector('h3');heading?.focus();}
for(const id of ['case-search','case-block','case-status']) $(id).addEventListener(id==='case-search'?'input':'change',()=>{page=0;renderCases();});
$('case-prev').onclick=()=>{page--;renderCases();focusCase();};
$('case-next').onclick=()=>{page++;renderCases();focusCase();};
$('case-random').onclick=()=>{const cases=filteredCases();if(!cases.length)return;const index=Math.floor(Math.random()*cases.length);page=Math.floor(index/pageSize);renderCases();document.querySelector(`#${cases[index].id} h3`).focus();};
document.addEventListener('input',event=>{const input=event.target.closest('[data-response]');if(input){saved.answers[input.dataset.response]=input.value;save();metrics();}});
$('case-list').addEventListener('change',event=>{const input=event.target.closest('[data-reviewed]');if(input){saved.reviewed[input.dataset.reviewed]=input.checked;save();metrics();if($('case-status').value!=='all'){renderCases();$('cases-title').focus();}}});
renderCases();
