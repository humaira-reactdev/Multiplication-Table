// =============VARIABLE PART START====================//
let input=document.querySelector('.input')
let button=document.querySelector('.button')
let result=document.querySelector('.result')

button.addEventListener('click',()=>{
    if (input.value==''){
        alert("Please provide a numerical value")
    }
    else{
        for(let i=1; i<11; i++){
            result.innerHTML += input.value + ' x ' + i + " = " + input.value*i + '<br>'
        }
    }
})