let header = document.querySelector('.header');
header.innerHTML =
'<div class="title">'+
'<h1>サイエンスコミュニケーション研究会 in 京都産業大学</h1>'+
'<a href="#"><img src="picture/sunglass.jpg" alt="サングラス"></a>'+
'</div>';

let navigation_bar = document.querySelector('.nav');
navigation_bar.innerHTML =
'<div class="nav-inner">'+
'<button type="button" id="menubtn">'+
'<img src="picture/hamburger_btn.png" alt="MENU" id="hbgbtn"><span>MENU</span>'+
'</button>'+
'<nav class="menu" id="menu">'+
'<ul>'+
'<template id="nav">'+
'<li><a><img id="img"><span></span><div></div></a></li>'+
'</template>'+
'</ul>'+
'</nav>'+
'</div>';

let footer = document.querySelector('.footer');
footer.innerHTML =
'<div id="pagetop">'+
'<a href="#"><img src="picture/pagetop.png" alt="pagetop"></a>'+
'</div>'+
'<div class="copyright">'+
'<small>Copyright &copy; Sunglasses ALL Rights Reserved</small>'+
'</div>';
