const allowed = ['mineral','oxblood','slate'];
function setTheme(name){if(!allowed.includes(name))return;document.getElementById('theme-css').href='styles/'+name+'.css';try{sessionStorage.setItem('hsc-theme',name)}catch(e){}}
const params=new URLSearchParams(location.search);const wanted=params.get('theme');
let initial=wanted;try{initial=initial||sessionStorage.getItem('hsc-theme')}catch(e){}
if(allowed.includes(initial))setTheme(initial);
