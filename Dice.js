let num = document.getElementById("num")
let Result = document.getElementById("Result")
let images = document.getElementById("images")
let submit = document.getElementById("submit")
let values = []
let dimages = []
let x = num.value
console.log(x)
submit.onclick = function roll(){
    for(let i = 0;i<num.value;i++){
        let value = Math.trunc(Math.random()*6+1)
        values.push(value);
        dimages.push(`<img src="Dimages/${value}.png">`) 
    }
    Result.textContent=`Result: ${values.join(',')}`
    images.innerHTML=dimages.join(' ')
}