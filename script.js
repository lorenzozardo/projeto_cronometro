var segundos=0
var minutos=0
var horas=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function iniciar(){
    relogio()
    interval= setInterval(relogio,17)
}

function pausar(){
    clearInterval(interval)
}

function parar(){
    clearInterval(interval)
    segundos=0
    minutos=0
    window.alert("O cronometro parou em: "+document.getElementById('relogio').innerText)
    document.getElementById('relogio').innerText='00:00:00'
}

function relogio(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0
        if(minutos==60){
            minutos=0
            horas++
        }
    }
    
document.getElementById('relogio').innerText=twoDigits(horas)+':'+twoDigits(minutos)+':'+twoDigits(segundos)

}