
function addDescription(){

    let container = document.getElementById("container-receipts")
    let description = document.getElementById("description").value
    let valuereceipts = document.getElementById("value-receipts").value

    let div = document.createElement('div')
    div.classList.add("description-value")
    div.classList.add("inter")
    div.innerHTML = `<div class="receipt-description">${description}</div>
    <div class="receipt-value">${valuereceipts}</div>`

    container.append(div)
    document.getElementById("description").value = ""; //limpa a caixa de texto
    document.getElementById("value-receipts").value = ""; //limpa a caixa de texto

}