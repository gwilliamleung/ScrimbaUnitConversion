const inputEl = document.getElementById("input")
const btnEL = document.getElementById("btn")
const mf = document.getElementById("mf")
const lg = document.getElementById("lg")
const kp = document.getElementById("kp")


btnEL.addEventListener("click", function(){
    mf.innerHTML = `${inputEl.value} meters = ${Math.round((inputEl.value*3.281)*1000)/1000} meters | ${inputEl.value} feet = ${Math.round((inputEl.value/3.281)*1000)/1000} meters` 
    lg.innerHTML = `${inputEl.value} liters = ${Math.round((inputEl.value*0.264)*1000)/1000} gallons | ${inputEl.value} gallons = ${Math.round((inputEl.value/0.264)*1000)/1000} liters` 
    kp.innerHTML = `${inputEl.value} kilos = ${Math.round((inputEl.value*2.204)*1000)/1000} pounds | ${inputEl.value} pounds = ${Math.round((inputEl.value/2.204)*1000)/1000} kilos` 
})