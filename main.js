let craters = [];
let lights = [];

function ver(n) {
    document.querySelector('.menu').style.display = 'none';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    document.getElementById('e' + n).style.display = 'block';
}

function menu() {
    document.querySelector('.menu').style.display = 'block';
    for(let i = 1; i <= 5; i++) {
        document.getElementById('e' + i).style.display = 'none';
    }
    craters = [];
    lights = [];
}

function e1() {
    let m = parseFloat(document.getElementById('mag').value);
    let r = '';
    if(m <= 1) r = 'Muy brillante';
    else if(m <= 3) r = 'Brillante';
    else if(m <= 6) r = 'Normal';
    else if(m <= 10) r = 'Débil';
    else r = 'No visible';
    document.getElementById('r1').innerHTML = r;
}

function e2() {
    let d = document.getElementById('dis').value.split(',');
    let s = 0;
    for(let i = 0; i < d.length; i++) {
        s += parseFloat(d[i]);
    }
    let p = s / d.length;
    document.getElementById('r2').innerHTML = 'Promedio: ' + p;
}

function a3() {
    let c = parseFloat(document.getElementById('cra').value);
    craters.push(c);
    document.getElementById('r3').innerHTML += c + ' km<br>';
}

function c3() {
    let g = 0;
    for(let i = 0; i < craters.length; i++) {
        if(craters[i] > 50) g++;
    }
    document.getElementById('r3').innerHTML += 'Grandes: ' + g;
}

function e4() {
    let c = document.getElementById('cod').value;
    let r = '';
    if(c == '1') r = 'Estrella';
    else if(c == '2') r = 'Planeta';
    else if(c == '3') r = 'Cometa';
    else if(c == '4') r = 'Asteroide';
    else r = 'Galaxia';
    document.getElementById('r4').innerHTML = r;
}

function a5() {
    let l = parseFloat(document.getElementById('luz').value);
    lights.push(l);
    document.getElementById('r5').innerHTML += l + ' lux<br>';
}

function c5() {
    let n = 0;
    for(let i = 0; i < lights.length; i++) {
        if(lights[i] < 5) n++;
    }
    document.getElementById('r5').innerHTML += 'Noches: ' + n;
}