
//Document is representing a webpage
//To access the document and maniplate the webpages by DOM

const header= document.getElementById('message');

header.style.color= 'green';
header.style.fontWeight= 10000;

//

const botton =document.getElementById('msg');

botton.addEventListener('click',function(){
    console.log('about Dom');
});


//hiding DOM elements

/*const botton =document.getElementById('o-DOM');

botton.addEventListener('click',function(){

    const dom= document.getElementById('DOM');

    dom.classList.remove('d-none');
});*/