//画像一覧
const backgrounds =[
  'picture_bg/acetaldehyde.png',
  'picture_bg/anthracene.png',
  'picture_bg/benzene.png',
  'picture_bg/benzoic_acid.png',
  'picture_bg/cyclohexane.png',
  'picture_bg/ethanol.png',
  'picture_bg/ethylene.png',
  'picture_bg/formaldehyde.png',
  'picture_bg/formic_acid.png',
  'picture_bg/glycerin.png',
  'picture_bg/methane.png',
  'picture_bg/methanol.png',
  'picture_bg/naphthalene.png',
  'picture_bg/nitrobenzene.png',
  'picture_bg/o-cresol.png',
  'picture_bg/ovalene.png',
  'picture_bg/o-xylene.png',
  'picture_bg/phenol.png',
  'picture_bg/toluene.png',
]

//背景表示関数
function createimg(){
  const section = document.getElementById('background');
  const img = document.createElement('img')

  let size = Math.random() * 50;

  img.style.height = 20 + size + 'px';

  img.style.top = Math.random() * innerHeight + 'px';
  img.style.left = Math.random() * innerWidth + 'px';

  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  img.setAttribute('src', bg);
  img.setAttribute('class', 'bg')

  section.appendChild(img)

  setTimeout(() =>{
    img.remove()
  },5000)
}

//関数の表示
setInterval(createimg , 100)
