'use strict';
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {}
};
console.log(appData.budget);
var ans1 = prompt("Введите обязательную статью расходов в этом месяце","");
ans1 = prompt("Введите обязательную статью расходов в этом месяце","");
var ans2 = prompt("Во сколько обойдется ? ","");
ans2 = prompt("Во сколько обойдется ? ","");
appData.expenses.ans1=ans2;
alert(appData.budget/30);
