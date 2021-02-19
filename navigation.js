const navigation = [
  {href: 'sunglass-home.html', src: 'picture/home_icon.png', cha: 'ホーム'},
  {href: 'sunglass-summary.html', src: 'picture/sunglass_logo.png', cha: '概要'},
  //{href: 'sunglass-experiment.html', src: 'picture/experiment_icon.png', cha: '面白い科学実験'},
  {href: 'sunglass-scienceforest.html', src: 'picture/forest_icon.png', cha: '科学の森'},
  //{href: 'sunglass-activity.html', src: 'picture/activity_icon.png', cha: '各種活動記録'},
  //{href: 'sunglass-member.html', src: 'picture/member_icon.png', cha: 'メンバー紹介'},
  //{href: 'sunglass-q&a.html', src: 'picture/q&a_icon.png', cha: '質問コーナー'},
];

let nav_li = document.querySelector('#nav');
for (var i = 0; i < navigation.length; i++) {
  let nav = navigation[i];
  let clone = nav_li.content.cloneNode(true);

  const a = clone.querySelector('a');
  const img = clone.querySelector('img');
  const text = clone.querySelector('span');

  a.setAttribute('href', nav.href);
  img.setAttribute('src', nav.src);
  text.innerHTML = nav.cha;

  nav_li.parentNode.appendChild(clone);
}
