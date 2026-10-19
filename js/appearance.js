(() => {
  const key='weblab-appearance-v1';
  const system=matchMedia('(prefers-color-scheme: dark)');
  let preference='system';
  let appearanceButton;
  try{const value=localStorage.getItem(key);if(['light','dark','system'].includes(value))preference=value;}catch{}
  const apply=()=>{
    document.documentElement.dataset.theme=preference==='system'?(system.matches?'dark':'light'):preference;
    document.documentElement.dataset.appearance=preference;
    if(appearanceButton){
      const next=document.documentElement.dataset.theme==='dark'?'claro':'oscuro';
      appearanceButton.setAttribute('aria-label',`Activar modo ${next}`);
      appearanceButton.title=`Activar modo ${next}`;
    }
  };
  apply();system.addEventListener('change',()=>{if(preference==='system')apply();});
  document.addEventListener('DOMContentLoaded',()=>{
    const header=document.querySelector('.nav-inner');if(!header)return;
    const button=document.createElement('button');button.type='button';button.id='appearance-open';button.className='appearance-open';button.innerHTML='<svg class="appearance-sun" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg><svg class="appearance-moon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 13.1A8.9 8.9 0 0 1 10.9 3.2a9 9 0 1 0 9.9 9.9Z"/><path d="M18 2v4m-2-2h4"/></svg>';
    appearanceButton=button;apply();
    header.insertBefore(button,header.querySelector('.nav-practice'));
    button.onclick=()=>{
      preference=document.documentElement.dataset.theme==='dark'?'light':'dark';
      apply();try{localStorage.setItem(key,preference);}catch{}
    };
    window.addEventListener('storage',event=>{if(event.key===key){preference=['light','dark','system'].includes(event.newValue)?event.newValue:'system';apply();}});
  });
})();
