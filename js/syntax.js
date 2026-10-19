/* Local syntax presentation only. Prism escapes source; no example is executed. */
(() => {
  if (!window.Prism) return;
  Prism.languages.insertBefore('css','function',{'number': /\b\d+(?:\.\d+)?(?:%|px|rem|em|vh|vw|ms|s|deg)?\b/});
  const aliases={html:'markup',xml:'markup',js:'javascript',javascript:'javascript',css:'css',json:'json',markup:'markup'};
  const painted=new WeakMap();
  const editors=new Map();
  const escape=text=>text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  function language(element,text){
    const pre=element.closest('pre');
    const hint=element.dataset.language||element.dataset.code||element.dataset.walkCode||element.dataset.exercise||pre?.dataset.walkCode||pre?.dataset.exercise||element.className.match(/language-([\w-]+)/)?.[1];
    if(aliases[hint])return aliases[hint];
    const label=element.closest('figure')?.querySelector('figcaption')?.textContent||'';
    if(/^CSS\b/i.test(label))return 'css';
    if(/^HTML\b/i.test(label))return 'markup';
    if(/^JavaScript\b/i.test(label))return 'javascript';
    if(element.id==='seo-head-code')return 'markup';
    if(element.id==='json-editor'||element.id==='json-output')return 'json';
    if(/^\s*(?:const|let|var|async|function|document\.|console\.|try\b|for\s*\()/m.test(text)&&!/^\s*</.test(text))return 'javascript';
    if(/<\/?[a-z][^>]*>|<!doctype/i.test(text))return 'markup';
    if(/^\s*[\[{]/.test(text)&&/"[^"\n]+"\s*:/.test(text)&&!/(?:const|let)\s/.test(text))return 'json';
    if(/(?:^|[\n{};])\s*(?:--[\w-]+|[\w-]+)\s*:\s*[^;{}]+;|@(?:media|supports|import|font-face)\b/.test(text))return 'css';
    if(/\b(?:const|let|var|function|document|console|return|await|async|fetch)\b|=>/.test(text))return 'javascript';
    const page=document.body.dataset.page;
    if(page==='css'||['spacing-code','font-pair-code','type-scale-code','harmony-code','palette-code','theme-css','css-generated'].includes(element.id))return 'css';
    if(page==='html')return 'markup';
    return 'javascript';
  }
  function html(text,lang){
    // A few lessons show the HTML script tag followed by its separate JS file.
    const mixed=lang==='markup'&&text.match(/^([\s\S]*?<\/script>)(\s*\n[\s\S]*)$/i);
    if(mixed&&/^\s*(?:\/\/|const\b|let\b|function\b|document\.)/.test(mixed[2])){
      return Prism.highlight(mixed[1],Prism.languages.markup,'markup')+Prism.highlight(mixed[2],Prism.languages.javascript,'javascript');
    }
    return Prism.languages[lang]?Prism.highlight(text,Prism.languages[lang],lang):escape(text);
  }
  function paint(pre){
    if(pre.closest('.syntax-editor')||pre.matches('[role=log],.lab-console,[data-walk-code=delta]'))return;
    const code=pre.querySelector('code')||pre,text=code.textContent;
    if(!text.trim())return;
    const lang=language(code,text),cache=painted.get(code);
    if(cache?.text===text&&cache.lang===lang&&cache.markup===code.innerHTML)return;
    code.innerHTML=html(text,lang);
    painted.set(code,{text,lang,markup:code.innerHTML});
    code.classList.add('syntax-code');pre.classList.add('syntax-block');pre.dataset.syntax=lang;
  }
  function paintInline(code){
    if(code.closest('pre,.syntax-editor'))return;
    const text=code.textContent,lang=language(code,text),cache=painted.get(code);
    if(!text.trim()||cache?.text===text&&cache.lang===lang&&cache.markup===code.innerHTML)return;
    code.innerHTML=html(text,lang);painted.set(code,{text,lang,markup:code.innerHTML});code.classList.add('syntax-inline');
  }
  function addEditor(input){
    if(editors.has(input))return;
    const shell=document.createElement('div');shell.className='syntax-editor';
    input.before(shell);shell.append(input);
    const mirror=document.createElement('pre');mirror.className='syntax-mirror';mirror.setAttribute('aria-hidden','true');
    shell.prepend(mirror);
    const nativeValue=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value');
    let lastValue=null,lastLanguage=null;
    function sync(){
      const text=input.value,lang=language(input,text);
      if(text!==lastValue||lang!==lastLanguage){mirror.innerHTML=html(text,lang)+'\n';lastValue=text;lastLanguage=lang;}
      mirror.style.width=input.clientWidth+'px';mirror.style.height=input.clientHeight+'px';
      mirror.style.left=input.clientLeft+'px';mirror.style.top=input.clientTop+'px';
      mirror.scrollTop=input.scrollTop;mirror.scrollLeft=input.scrollLeft;
    }
    // Existing lessons populate textarea.value directly when changing examples.
    Object.defineProperty(input,'value',{configurable:true,get(){return nativeValue.get.call(this);},set(value){nativeValue.set.call(this,value);sync();}});
    input.addEventListener('input',sync);input.addEventListener('scroll',sync);
    new ResizeObserver(sync).observe(input);
    editors.set(input,sync);sync();input.classList.add('syntax-ready');
  }
  function refresh(){
    document.querySelectorAll('pre').forEach(paint);
    document.querySelectorAll('code').forEach(paintInline);
    document.querySelectorAll('textarea[data-code],textarea[id^=walk-],#json-editor').forEach(addEditor);
  }
  let queued=false;
  const observer=new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}});
  refresh();observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  document.fonts?.ready.then(()=>editors.forEach(sync=>sync()));
})();
