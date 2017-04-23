/**
 * Created by Administrator on 2017/4/22.
 */
var carousel = document.getElementById('carousel');
var arrS = [];
for (var i = 0; i < carousel.childNodes.length; i++) {
    if (carousel.childNodes[i].nodeType == 1) {
        arrS.push(carousel.childNodes[i]);
    }
}
var t = 2;
arrS[1].addEventListener('click', function () {
    arrS[t].style.display = 'none';
    t++;
    if (t == 11) {
        t = 2;
    }
    arrS[t].style.display = 'block';
});
arrS[0].addEventListener('click', function () {
    arrS[t].style.display = 'none';
    t--;
    if (t == 1) {
        t = 11 - 1;
    }
    arrS[t].style.display = 'block';
});
function foo() {
    arrS[t].style.display = 'none';
    t = t + 1;
    if (t == 11) {
        t = 2;
    }
    arrS[t].style.display = 'block';
}
var interval =  setInterval(foo, 2000);
carousel.addEventListener('mouseenter', function () {
    clearInterval(interval);
});
carousel.addEventListener('mouseout', function () {
    clearInterval(interval);
    interval = setInterval(foo, 2000);
});
var menuBottom = document.getElementById('menuBottom');
var arr2 = [];
for (var k = 0; k < menuBottom.childNodes.length; k++) {
    if (menuBottom.childNodes[k].nodeType != 3) {
        arr2.push(menuBottom.childNodes[k]);
    }
}
for (var jj = 0; jj < arr2.length; jj++) {
    arr2[jj].addEventListener('click', function () {
        for (var k = 2; k < 11; k++) {
            arrS[k].style.display = 'none'
        }
        arrS[arr2.indexOf(this) + 2].style.display = 'block';
    })
}
