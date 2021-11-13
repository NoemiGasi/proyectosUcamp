function onFormSubmit(){
    var formdata = readFormData
    insertNewRecord(formdata);
}


function readFormData(){
    var formdata = {};
    formdata["codigoProducto"] = document.getElementById("codigoProducto").value;
    formdata["producto"] = document.getElementById("producto").value;
    formdata["cantidad"] = document.getElementById("cantidad").value;
    formdata["precio"] = document.getElementById("precio").value;
    return formdata
}
function insertNewRecord(data){
    var table =document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.codigoProducto;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.producto;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cantidad;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.precio;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Eliminar</button>`
}