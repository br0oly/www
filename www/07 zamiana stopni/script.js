const stopnie = document.querySelector('#stopnie');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let s = parseFloat(stopnie.value);
    let kel =s+273.15;
    let far =s*1.8+32;
    console.log('kel = '+kel )

    wynik.innerHTML = `Wynik obliczeń dla T<sub>celsjusza</sub>sub> = ${s}<br>
    T<sub>Kelwina</sub> = ${kel}<br> T<sub>Farenheit</sub> = ${far}<br>`;
})