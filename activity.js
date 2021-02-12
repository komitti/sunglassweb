const activity = [
  {href: '#', datetime: '2019-12-15', time: '2019/12/15', span: '上賀茂ラボin上賀茂小学校'},
  {href: '#', datetime: '2019-10-05', time: '2019/10/05', span: 'サタデージャンボリーin京都産業大学'},
  {href: '#', datetime: '2019-06-23', time: '2019/06/23', span: 'むずびわざ大学in小豆島'},
  {href: '#', datetime: '2018-12-09', time: '2018/12/09', span: '上賀茂ラボin上賀茂小学校'},
  {href: '#', datetime: '2018-10-06', time: '2018/10/06', span: 'サタデージャンボリーin京都産業大学'},
  {href: '#', datetime: '2018-08-10', time: '2018/08/10', span: '科学体験イベントin洛南イオン'},
];

let act_li = document.querySelector('#activity');
for (var i = 0; i < activity.length; i++) {
  let act = activity[i];
  let clone = act_li.content.cloneNode(true);
  const a = clone.querySelector('a');
  const time = clone.querySelector('time');
  const span = clone.querySelector('span');

  a.setAttribute('href', act.href);
  time.setAttribute('datetime', act.datetime);
  time.innerHTML = act.time;
  span.innerHTML = act.span;

  act_li.parentNode.appendChild(clone);
};
