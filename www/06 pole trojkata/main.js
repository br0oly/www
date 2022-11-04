
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);
    const c = Number(document.querySelector('#c').value);

    let p = Number(0.5*(a+b+c));
    if(a+b>c && a+c>b && b+c>a){
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    wynik.innerHTML = 'Pole trójkąta wynosi: '+s;
    }else {
        wynik.innerHTML = 'Nieeee!!!';
    }


})