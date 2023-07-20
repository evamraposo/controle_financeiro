var totalReceipts = 0

function addReceipts(){

    let container = document.getElementById("container-receipts")
    let description = document.getElementById("description").value
    let valuereceipts = document.getElementById("value-receipts").value
   
    totalReceipts += parseFloat(valuereceipts)
    let ctotal = document.getElementById("total-receipts")
    ctotal.innerHTML = totalReceipts

    let id = Math.random()

    let div = document.createElement('div')
    div.classList.add("description-value")
    div.classList.add("inter")
    div.id = id
    
    
    div.innerHTML = `<div class="receipt-description">${description}</div>
    <div class="receipt-value">${valuereceipts}</div>
    <button class="delete" id="${id}" onclick="deleteElement(this)"><strong>x</strong></button>
    `

    container.append(div)
    document.getElementById("description").value = ""; //limpa a caixa de texto
    document.getElementById("value-receipts").value = ""; //limpa a caixa de texto

}

var totalExpenses = 0

function addExpenses(){
    let container = document.getElementById("container-expenses")
    let category = document.getElementById("category").value
    let valuex = document.getElementById("value-expenses").value

    totalExpenses += parseFloat(valuex)
    let ctotal = document.getElementById("total-expenses")
    ctotal.innerHTML = totalExpenses

    let id = Math.random()

    let div = document.createElement('div')
    div.classList.add("description-value")
    div.classList.add("inter")
    div.id = id
    
    
    div.innerHTML = `<div class="receipt-description">${category}</div>
    <div class="receipt-value">${valuex}</div>
    <button class="delete" id="${id}" onclick="deleteElement(this)"><strong>x</strong></button>
    `

    container.append(div)
    category.value = ""; //limpa a caixa de texto
    valuex.value = ""; //limpa a caixa de texto
}


function deleteElement(element){
    id = element.id
    let div = document.getElementById(id)
    div.innerHTML = "";

    let child = document.getElementsByClassName('expense-value').value

    let valor = document.getElementById('total-expenses')
    console.log(child)

    if (totalExpenses <= parseFloat(child)) {
        totalExpenses = 1
        valor.innerHTML =  totalExpenses

    } else {
        totalExpenses -= parseFloat(child)
        valor.innerHTML =  totalExpenses
    }


    valor.innerHTML =  totalExpenses



}

function addSobra(){
    let value = totalReceipts - totalExpenses
    let sobra = document.getElementsByClassName("resume-value")
    sobra.innerHTML = value
}

