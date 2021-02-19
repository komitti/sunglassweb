const website = [
  {datetime: '2021-02-19', time: '2021/02/19', span: 'Ver.1.1.0', p: 'サングラスの概要ページを作成しました'}
  {datetime: '2021-02-12', time: '2021/02/12', span: 'Ver.1.0.0', p: 'サングラスのホームページをリメイクし、投稿しました'},
];

let web_li = document.querySelector('#website');
for (var i = 0; i < website.length; i++) {
  let web = website[i];
  let clone = web_li.content.cloneNode(true);
  const time = clone.querySelector('time');
  const span = clone.querySelector('span');
  const p = clone.querySelector('p');

  time.setAttribute('datetime', web.datetime);
  time.innerHTML = web.time;
  span.innerHTML = web.span;
  p.innerHTML = web.p;

  web_li.parentNode.appendChild(clone);
};
