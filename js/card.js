function addPlayer(elementId , liId) {
    const player = document.getElementById(elementId);
    const playerString = player.innerText;
    const bestFiveOneField = document.getElementById(liId);
    bestFiveOneField.innerText = playerString;
}



document.getElementById('messi-btn').addEventListener('click', function () {

    addPlayer('messi-txt' , 'li-one');
   
})
document.getElementById('ney-btn').addEventListener('click', function () {

    addPlayer('ney-txt' , 'li-two');
   
})
document.getElementById('bappe-btn').addEventListener('click', function () {

    addPlayer('bappe-txt' , 'li-three');
   
})
document.getElementById('paredes-btn').addEventListener('click', function () {

    addPlayer('paredes-txt' , 'li-four');
   
})
document.getElementById('renato-btn').addEventListener('click', function () {

    addPlayer('renato-txt' , 'li-five');
   
})
document.getElementById('dona-btn').addEventListener('click', function () {

    addPlayer('dona-txt'  );
   
})