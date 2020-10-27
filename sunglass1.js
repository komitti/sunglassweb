var icon = document.getElementById('icon');
icon.innerHTML =
'<li>'+
'<a href="https://twitter.com/ksu_scs">'+
'<picture>'+
'<source srcset="picture/Twitter_logo.webp" type="image/webp">'+
'<img src="picture/Twitter_logo.png" alt="Twitter" width="50px" height="50px">'+
'</picture>'+
'</a>'+
'</li>'+
'<li>'+
'<a href="https://www.instagram.com/sunglass.ksu/">'+
'<picture>'+
'<source srcset="picture/Insta_logo.webp" type="image/webp">'+
'<img src="picture/Insta_logo.png" alt="Instagram" width="50px" height="50px">'+
'</picture>'+
'</a>'+
'</li>';

var title = document.getElementById('title');
title.innerHTML =
'<h2 id="sub-title">サイエンスコミュニケーション研究会 in 京都産業大学</h2>'+
'<picture>'+
'<source srcset="picture/sunglass_logo.webp" type="image/webp">'+
'<img src="picture/sunglass_logo.png" alt="Sunglasses" id="logo" width="87px" height="87px">'+
'</picture>'+
'<h1>サングラス</h1>'+
'<h2 id="title-english">sunglasses</h2>';

var menu = document.getElementById('menu');
menu.innerHTML =
'<ul>'+
'<li><a href="../sunglass-home.html">ホーム<div>home</div></a></li>'+
'<li><a href="../sunglass-experiment.html">面白い科学実験<div>experiment</div></a></li>'+
'<li><a href="../sunglass-kagakunomori.html">科学の森<div>forest</div></a></li>'+
'<li><a href="../sunglass-katsudou.html">各種活動記録<div>activity</div></a></li>'+
'<li><a href="../sunglass-member.html">メンバー紹介<div>member</div></a></li>'+
'<li><a href="../sunglass-question.html">質問コーナー<div>question</div></a></li>'+
'</ul>';

var copyright = document.getElementById('copyright');
copyright.innerHTML =
'<p><small>Copyright &copy; Sunglass ALL Rights Reserved</small></p>';
