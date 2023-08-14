var totalReceipts = 0
var totalExpenses = 0
var div = null
var valor = null
var totalP = null

function addData(divContainer, descriptionPlace, valuePlace, totals){
    let values = document.getElementById(valuePlace).value 

    if (values != ""){
        let container = document.getElementById(divContainer)
        let description = document.getElementById(descriptionPlace).value
    

    
    
        let total = document.getElementById(totals)
    

        let id = Math.random()

        let div = document.createElement('div')
        div.classList.add("description-value")
        div.classList.add("inter")
        div.id = id
    
        if (valuePlace == 'value-receipts'){

            totalReceipts += parseFloat(values)
            total.innerHTML = totalReceipts
       

            div.innerHTML = `<div class="receipt-description">${description}</div>
                <div class="receipt-value">${values}</div>
                <button class="delete" id="${id}" data-bs-toggle="modal" data-bs-target="#modal-delete" onclick="getElement(this,'total-receipts')"><i class="bi bi-trash3"></i></button>
                `
        
        } else{

        
            totalExpenses += parseFloat(values)
            total.innerHTML = totalExpenses
        
            div.innerHTML = `<div class="receipt-description">${description}</div>
                <div class="receipt-value">${values}</div>
                <button class="delete" id="${id}"  data-bs-toggle="modal" data-bs-target="#modal-delete" onclick="getElement(this,'total-expenses')"><i class="bi bi-trash3"></i></button>
                `
        
    }

        container.append(div)
        document.getElementById(descriptionPlace).value = ""; //limpa a caixa de texto
        document.getElementById(valuePlace).value = ""; //limpa a caixa de texto

    }
    
}


function getElement(element, totalPlace){

    let id = element.id

    div = document.getElementById(id)

    totalP = totalPlace
    
    valor = document.getElementById(totalPlace)
    
}


function deleteElement(){

    let child = div.children[1].innerText

    if (totalP == 'total-receipts'){
        
        
        if ((totalReceipts <= parseFloat(child)) || (isNaN(parseFloat(child)) == true)) {

            totalReceipts = 0
            valor.innerHTML =  "";
            
        } else {
           
            totalReceipts -= parseFloat(child)
            valor.innerHTML =  totalReceipts
        }

    } else{
        if ((totalExpenses <= parseFloat(child)) || (isNaN(parseFloat(child)) == true)) {
            totalExpenses = 0
            valor.innerHTML =  "";
    
        } else {
            totalExpenses -= parseFloat(child)
            valor.innerHTML =  totalExpenses
        }
    }
    div.remove()
    addSobra()

}


function addSobra(){
       
        let value = totalReceipts - totalExpenses
        let sobra = document.getElementById("sobra")
        sobra.innerHTML = value
        
}



