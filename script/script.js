document.querySelectorAll("div#wrap .selected")[0].innerText = "변경완료!";
document.querySelectorAll("div#wrap .selected")[1].style.color = "#08f";
document.querySelectorAll("div#wrap .selected")[0].style.fontSize = "30px";

var data = ["A", 3.14];
data[0] = "C";
alert("data[0] : " + data[0]);
