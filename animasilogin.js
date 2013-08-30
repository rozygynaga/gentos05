// -- animasi-login3.js --
// -- Ket : Jadi diri sendiri lebih baik dan puas --

// -- CSS Animasi Login di tulis oleh santa-mars.blogspot.com --
document.write('<sty'+'le>'
+'.rotatebtnSM{position:relative;top:45%;opacity:1;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#353ccc;width:15px;cursor:help;padding:13px 11px 13px 15px;height:15px;background:url('+Gambar_Login_Anda+')no-repeat center;margin:0 auto;border-radius:23px;-moz-border-radius:23px;-webkit-border-radius:23px;border:3px dashed #79c116;box-shadow:0 0 3px #777,0 0 5px #ccc,inset 0 0 3px #eee;-moz-box-shadow:0 0 3px #777,0 0 5px #ccc,inset 0 0 3px #eee;-o-box-shadow:0 0 3px #777,0 0 5px #ccc,inset 0 0 3px #eee;-webkit-box-shadow:0 0 3px #777,0 0 5px #ccc,inset 0 0 3px #eee;text-shadow:0px -1px 0px rgba(000,000,000,0.2),0px 1px 0px rgba(255,255,255,1);-moz-transition:all 0.2s;-webkit-transition:all 0.2s;-o-transition:all 0.2s;-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);font-weight:700}'
+'.rotatebtnSM:hover{background:url('+Gambar_Login_Anda+')no-repeat center;color:#fff;text-shadow:0px 0px 5px rgba(000,000,000,0.2),0px 0px 5px rgba(255,255,255,1);border:3px dashed #79c113;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);box-shadow:0 0 100px #ff0,0 0 10px #00f,inset 0 0 10px #0000bf;-moz-box-shadow:0 0 100px #ff0,0 0 10px #00f,inset 0 0 10px #0000bf;-webkit-box-shadow:0 0 100px #ff0,0 0 10px #00f,inset 0 0 10px #0000bf;-o-box-shadow:0 0 100px #ff0,0 0 10px #00f,inset 0 0 10px #0000bf}'
+'.boxcreditSM{margin:0 auto;border:2px solid #79c113;width:20px;height:0px;margin-top:-26px;overflow:hidden;box-shadow:inset 0 0 10px #ddd,0 0 3px #ccc;background:#79c113}'
+'.left { float:left;}'
+'.clearfix:after {clear: both;content: \' \';display: block;font-size: 0;line-height: 0;visibility: hidden;width: 0;height: 0;}'
+'.clearfix {display: inline-block;}'
+'* html .clearfix {height: 1%;}'
+'.clearfix {display: block;}'
+'.scanner-loginSM{ text-align:left;display:none;width:760px; height:130px;margin:0 auto; padding:30px 0;top: 30%;position: relative;}'
+'.scanner-blockSM{ width:460px; margin:0 auto;padding:0;}'
+'.scanner-boxSM{ width:130px; height:130px; margin:0; background:url(http://i906.photobucket.com/albums/ac269/sk0denk/scan_zps7769331d.png) top center no-repeat; position:relative;}'
+'.scanner-lineSM{ width:124px; height:20px; background:url(http://i906.photobucket.com/albums/ac269/sk0denk/cc_zpsf4e7f676.png) repeat-x; position:absolute; top:0; left:3px;}'
+'.data-loginSM{margin:3px 0 0 30px;}'
+'.data-loginSM li{ padding:0 0 5px 0; font:20px Verdana; color:#79c113;text-shadow:1px 1px 0px #000000;list-style:none;}'
+'.data-loginSM li.search-identitas-SM{ display:none;}'
+'.data-loginSM li span{ color:#5b8e16;}');
document.write('</sty'+'le>');

// -- jQuery Animasi Login di tulis oleh santa-mars.blogspot.com --
$(document).ready(function(){
$(".rotatebtnSM").click(function(){
$(".rotatebtnSM")
.animate({top: "45%", opacity: "0"}, 250)
.animate({top: "-700px"}, 250, function() {
$(".boxcreditSM")
.animate({opacity: "1", width: "300px"}, 450)
.animate({width: "1000px"}, 250)
.animate({width: "970px"}, 250)
.animate({width: "1000px"}, 250)
.fadeOut(250, function() {
$(".scanner-loginSM").slideDown(400, function() {
$(".scanner-lineSM")
.animate({top: "25px"}, 250)
.animate({top: "50px"}, 250)
.animate({top: "75px"}, 250)
.animate({top: "100px"}, 250)
.fadeOut(200, function() {
$(".search-identitas").fadeOut(400, function() {
$(".search-identitas-SM.1").fadeIn(500, function() {
$(".search-identitas-SM.2").fadeIn(500, function() {
$(".search-identitas-SM.3").fadeIn(500, function() {
$(".search-identitas-SM.4").fadeIn(500, function() {
$(".scanner-loginSM").fadeOut(500, function() {
$("#animasi-munyer1,#animasi-munyer2").slideUp(1250)
$("#animasi-munyer3,,#animasi-munyer4").hide(1250, function() {
$("#animasi-loginSM").fadeOut(250)
return false;
});
});
});
});
});
});
});
});
});
});
});
});
});

// -- Create Elemen Animasi Login di tulis oleh santa-mars.blogspot.com --
document.write('<div class="rotatebtnSM" style="top:45%; opacity: 1;"></div>'
+'<div class="boxcreditSM" style="width:0px; height: 0px; opacity: 0;top: 45%;position: relative;"></div>'
+'<div class="scanner-loginSM clearfix">'
+'<div class="scanner-blockSM">'
+'<div class="scanner-boxSM left">'
+'<div class="scanner-lineSM">'
+'</div>'
+'</div>'
+'<ul class="data-loginSM left">'
+'<li class="search-identitas">Wait... identify...</li>'
+'<li class="search-identitas-SM 1">User : '+Gentos+'</li>'
+'<li class="search-identitas-SM 2">Pass : *********</li>'
+'<li class="search-identitas-SM 3">Connecting...</li>'
+'<li class="search-identitas-SM 4">Logged In Successfully..</li>'
+'</ul>'
+'</div>');
document.write('</div>');