(function () {
  const lang = document.documentElement.lang.slice(0, 2);
  const labels = {
    fr: {filter:'Explorer par domaine',all:'Tous',mechanics:'Conception',simulation:'Simulation',racing:'Formula Student',material:'Matériaux & fabrication',count:'projets affichés',prev:'Projet précédent',next:'Projet suivant',back:'Tous les projets'},
    en: {filter:'Explore by field',all:'All',mechanics:'Design',simulation:'Simulation',racing:'Formula Student',material:'Materials & manufacturing',count:'projects shown',prev:'Previous project',next:'Next project',back:'All projects'},
    de: {filter:'Nach Bereich entdecken',all:'Alle',mechanics:'Konstruktion',simulation:'Simulation',racing:'Formula Student',material:'Material & Fertigung',count:'Projekte angezeigt',prev:'Vorheriges Projekt',next:'Nächstes Projekt',back:'Alle Projekte'}
  }[lang] || {};
  const categories = {
    'projet-lanceur-balles-golf.html':'mechanics', 'projet-bella-lui-vrt.html':'mechanics racing', 'projet-alpinea-vrt.html':'simulation racing', 'projet-cfd-naca0015.html':'simulation', 'projet-reverse-engineering-mixeur.html':'mechanics', 'projet-decoupe-connecteurs.html':'mechanics', 'projet-potence-mdf.html':'mechanics material', 'projet-design-eversys.html':'mechanics', 'projet-recyclage-pet-filament.html':'material'
  };
  const list=document.querySelector('#autres .list');
  if(list){
    const rows=[...list.querySelectorAll('.list-row')];
    const toolbar=document.createElement('div'); toolbar.className='project-filter';
    const heading=document.createElement('p'); heading.className='lbl filter-label'; heading.textContent=labels.filter; toolbar.append(heading);
    const buttons=document.createElement('div'); buttons.className='filter-buttons'; buttons.setAttribute('role','group'); buttons.setAttribute('aria-label',labels.filter);
    const result=document.createElement('p'); result.className='filter-count lbl lbl-sm'; result.setAttribute('aria-live','polite');
    ['all','mechanics','simulation','racing','material'].forEach(key=>{
      const b=document.createElement('button'); b.type='button'; b.className='filter-button'; b.textContent=labels[key]; b.setAttribute('aria-pressed',key==='all'?'true':'false');
      b.addEventListener('click',()=>{let count=0;rows.forEach(row=>{const match=key==='all'||(categories[row.getAttribute('href')]||'').split(' ').includes(key);row.hidden=!match;if(match){count++;row.classList.add('is-visible');}});buttons.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button===b)));result.textContent=count+' / '+rows.length+' '+labels.count;}); buttons.append(b);
    });
    result.textContent=rows.length+' / '+rows.length+' '+labels.count;
    toolbar.append(buttons,result); list.before(toolbar);
  }
})();
