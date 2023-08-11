var totalReceipts = 0
var totalExpenses = 0

function addData(divContainer, descriptionPlace, valuePlace, totals){

    let container = document.getElementById(divContainer)
    let description = document.getElementById(descriptionPlace).value
    let values = document.getElementById(valuePlace).value

    
    
    let total = document.getElementById(totals)
    

    let id = Math.random()

    let div = document.createElement('div')
    div.classList.add("description-value")
    div.classList.add("inter")
    div.id = id
    
    if (valuePlace == 'value-receipts'){

        

        if (values != ""){
            totalReceipts += parseFloat(values)
            total.innerHTML = totalReceipts
        }

        div.innerHTML = `<div class="receipt-description">${description}</div>
    <div class="receipt-value">${values}</div>
    <button class="delete" id="${id}" onclick="deleteElement(this, 'total-receipts');addSobra()"><strong>x</strong></button>
    `

    } else{

        if (values != ""){
            totalExpenses += parseFloat(values)
            total.innerHTML = totalExpenses
        }
        
        div.innerHTML = `<div class="receipt-description">${description}</div>
    <div class="receipt-value">${values}</div>
    <button class="delete" id="${id}" onclick="deleteElement(this, 'total-expenses');addSobra()"><strong>x</strong></button>
    `
        
    }

    container.append(div)
    document.getElementById(descriptionPlace).value = ""; //limpa a caixa de texto
    document.getElementById(valuePlace).value = ""; //limpa a caixa de texto

}



function deleteElement(element, totalPlace){
    id = element.id
    let div = document.getElementById(id)
    let child = div.children[1].innerText


    let valor = document.getElementById(totalPlace)
    if (totalPlace == 'total-receipts'){

        if ((totalExpenses <= parseFloat(child)) || (isNaN(parseFloat(child)) == true)) {
            totalReceipts = 0
            valor.innerHTML =  "";
    
        } else {
            totalReceipts -= parseFloat(child)
            valor.innerHTML =  totalReceipts
        }
    }else{
        if ((totalExpenses <= parseFloat(child)) || (isNaN(parseFloat(child)) == true)) {
            totalExpenses = 0
            valor.innerHTML =  "";
    
        } else {
            totalExpenses -= parseFloat(child)
            valor.innerHTML =  totalExpenses
        }
    }

    div.remove()

}


function addSobra(){

        let value = totalReceipts - totalExpenses
        let sobra = document.getElementById("sobra")
        sobra.innerHTML = value
    
}
    

