
function playerSelect(event, btnId) {
    const orderList = document.getElementById('orderd-list');
    if (orderList.children.length != 5) {
        const newItem = document.createElement('li');
        const itemValue = event;
        newItem.innerText = itemValue;
        orderList.appendChild(newItem);
        document.getElementById(btnId).disabled = true;
    }
    else{
        alert('Please Choto Bhai!! Keep Your Head Coool');
    }


}


