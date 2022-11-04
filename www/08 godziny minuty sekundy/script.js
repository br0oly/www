//wprowadzenie danych
const sekundy = document.querySelector('#sek');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

//obliczanie i wyświetlanie wyniku
btn.addEventListener('click', function(){
    let sek = parseInt(sekundy.value);
    let g = Math.floor(sek/3600);
    let m = Math.floor(sek%3600/60);
    let s = Math.floor(sek%60);

    console.log(`${g} g ${m} m ${s} s`);
    wynik.innerHTML = `<strong>${g}g ${m}m ${s}s`;
})
