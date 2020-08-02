'use strict'

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

    // appData.expenses.a1 = a2;
    // appData.expenses.a3 = a4;

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }
        appData.expenses[a] = b;
    }

    // let i = 0

    // while (i < 2) {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце"),
    //         b = prompt("Во сколько обойдется?");

    //     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    //         console.log("done");
    //         appData.expenses[a] = b;
    //     } else {
    //         console.log("bad result");
    //         i--;
    //     }

    //     i++;
    // }

    // let i = 0

    // do {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце"),
    //         b = prompt("Во сколько обойдется?");

    //     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    //         console.log("done");
    //         appData.expenses[a] = b;
    //     } else {
    //         console.log("bad result");
    //         i--;
    //     }
    //     i++;
    // }
    // while (i < 2)

    appData.moneyPreDay = appData.budget / 30;

    alert("Ежедневный бюджет:" + appData.moneyPreDay + " руб.");

    if(appData.moneyPreDay < 100) {
        console.log("Минимальный уровень достактка");
    } else if(appData.moneyPreDay > 100 && appData.moneyPreDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPreDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }

