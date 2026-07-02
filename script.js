(function(){
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close');
  const todayBtn = document.getElementById('today');
  const key = 'neostudy_popup_hide_until';
  if(!popup) return;
  try {
    const saved = localStorage.getItem(key);
    if(saved && Number(saved) > Date.now()) popup.classList.add('hidden');
  } catch(e) {}
  closeBtn && closeBtn.addEventListener('click', ()=> popup.classList.add('hidden'));
  todayBtn && todayBtn.addEventListener('click', ()=> {
    try { localStorage.setItem(key, String(Date.now() + 24*60*60*1000)); } catch(e) {}
    popup.classList.add('hidden');
  });
})();