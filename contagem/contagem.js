const diasE1 = document.getElementById("dias");
const horasE1 = document.getElementById("horas");
const minsE1 = document.getElementById("minutos");
const segundosE1 = document.getElementById("segundos");

const minYears = "1 Jan 2023"

function countdown(){

    const newYearsData = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentData) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const mins = Math.floor(totalSegundos / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    function formatTime(params) {
        
    }

}