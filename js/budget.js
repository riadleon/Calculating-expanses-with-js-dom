function calculateTotalExpanse(elementId) {
    const budgetField = document.getElementById(elementId);
    const BudgetString = budgetField.value;
    const Budget = parseInt(BudgetString);
    return Budget;

}

function totalPlayerExpanse() {

    const orderList = document.getElementById('orderd-list');
    const Budget = calculateTotalExpanse('per-player-field')
    const playerExpanseField = document.getElementById('expanse-field');
    const totalPlayerBudget = Budget * orderList.children.length;
    playerExpanseField.innerText = totalPlayerBudget;
    return totalPlayerBudget;
}




document.getElementById('btn-per-player').addEventListener('click', function () {

    totalPlayerExpanse();


})

document.getElementById('btn-total-calc').addEventListener('click', function () {
    const managerExpanse = calculateTotalExpanse('manager-field');
    const coachExpanse = calculateTotalExpanse('coach-field');

    const totatExpanse = managerExpanse + coachExpanse + totalPlayerExpanse();

    const totalField = document.getElementById('total-amount');
    totalField.innerText = totatExpanse;

})