
function playerSelect(event, btnId) {
    const orderList = document.getElementById('orderd-list');
    const newItem = document.createElement('li');
    const itemValue = event;
    newItem.innerText = itemValue;
    orderList.appendChild(newItem);
    document.getElementById(btnId).disabled = true;
}


