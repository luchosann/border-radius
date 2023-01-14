window.onload = function(){
    const b = document.getElementById('box');
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a3 = document.getElementById('a3');
    const a4 = document.getElementById('a4');
    const r = document.getElementById('result');

    a1.onchange = a2.onchange = a3.onchange = a4.onchange = function(){
        b.style.borderRadius = a1.value + '% ' + a2.value + '% ' + a3.value + '% ' + a4.value + '%';
        r.innerHTML ="border-radius: " + b.style.borderRadius;
    }
    
}