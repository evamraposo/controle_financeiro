function getDate(){
    const date = new Date();
    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth()

    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro']

    month = monthNames[currentMonth]

    datePlace = document.querySelector('.date')
    datePlace.innerText = `${today} de ${month} de ${currentYear}`
}

getDate()