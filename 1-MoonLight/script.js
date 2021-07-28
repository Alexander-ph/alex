let bg= document.getElementById('bg');
let moon= document.getElementById('moon');
let mountain= document.getElementById('mountain');
let road= document.getElementById('road');
let text= document.getElementById('text');

window.addEventListener('scroll',function(){
    // 向下滚动的距离。
    var value = window.scrollY;

    // 随着滚动来设置，定位的位置。乘一个参数，形成不同的移动速度。
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';

});