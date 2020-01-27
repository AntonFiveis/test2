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
let ans2 = prompt("Введите обязательную статью расходов в этом месяце","");
var ans3 = prompt("Во сколько обойдется ? ","");
let ans4 = prompt("Во сколько обойдется ? ","");
appData.expenses.ans1=ans2;
appData.expenses.ans3=ans4;
alert(appData.budget/30);
