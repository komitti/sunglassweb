const news = [
  {datetime: '2020-10-22', time: '2020/10/22', span: 'サングラスについての説明会を行いました'},
  {datetime: '2020-10-20', time: '2020/10/20', span: 'サングラスについての説明会を行いました'},
  {datetime: '2020-09-01', time: '2020/09/01', span: '理工系の先輩・後輩・同期と繋がれる座談会を行いました'},
  {datetime: '2020-08-28', time: '2020/08/28', span: '先輩に質問できる座談会を行いました'},
];

let news_li = document.querySelector('#news');
for (var i = 0; i < news.length; i++) {
  let ns = news[i];
  let clone = news_li.content.cloneNode(true);
  const time = clone.querySelector('time');
  const span = clone.querySelector('span');
  const p = clone.querySelector('p');

  time.setAttribute('datetime', ns.datetime);
  time.innerHTML = ns.time;
  span.innerHTML = ns.span;

  news_li.parentNode.appendChild(clone);
}
