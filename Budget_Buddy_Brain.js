
            const params = new URLSearchParams(window.location.search);
            let cardId = params.get("id");
            // ===== SAFE DATA LOADER =====
            function getData() {
                return JSON.parse(localStorage.getItem("Data")) || {};
            }

            function saveData(data) {
                localStorage.setItem("Data", JSON.stringify(data));
            }

            // ===== SAVE BUDGET =====
            
           function saveBudget() {
    let data = getData();

    let userBudget = Number(document.querySelector("#budgetInput").value);

    let displayBudget = document.querySelector("#displayBudget");
    let budgetError = document.querySelector("#budgetError");
    let displayRemain = document.querySelector("#displayRemain");

    // Reset UI
    displayBudget.style.display = "none";
    budgetError.style.display = "none";
    budgetError.innerHTML = "";

    if (isNaN(userBudget) || userBudget <= 0) {
        budgetError.style.display = "flex";
        budgetError.innerHTML = "Please enter valid budget";
        return;
    }

    if (!data[cardId]) {
        data[cardId] = {
            budget: 0,
            expense: 0
        };
    }

    data[cardId].budget = userBudget;

    saveData(data);

    displayBudget.style.display = "flex";
    displayBudget.innerHTML = `
        <p><b>Budget:</b> $${userBudget}</p>
    `;

    RemainCall();
}

    // ===== SAVE EXPENSE =====
function ExpenseSave() {
    let data = getData();

    let Expense = Number(document.querySelector("#expenseInput").value);

    let displayExpense = document.querySelector("#displayExpense");
    let expenseError = document.querySelector("#expenseError");

    // Reset UI
    displayExpense.style.display = "none";
    expenseError.style.display = "none";
    expenseError.innerHTML = "";

    if (!data[cardId]) {
        expenseError.style.display = "flex";
        expenseError.innerHTML = "Please save budget first";
        return;
    }

    if (isNaN(Expense) || Expense <= 0) {
        expenseError.style.display = "flex";
        expenseError.innerHTML = "Please enter valid expense";
        return;
    }

    let currentExpense = data[cardId].expense || 0;
    let budget = data[cardId].budget || 0;

    if (currentExpense + Expense > budget) {
        expenseError.style.display = "flex";
        expenseError.innerHTML = "Sorry expense exceeded";
        return;
    }

    data[cardId].expense = currentExpense + Expense;

    saveData(data);

    displayExpense.style.display = "flex";
    displayExpense.innerHTML = `
        <p><b>Expense:</b> $${data[cardId].expense}</p>
    `;

    RemainCall();
}
            function RemainCall() {
                let data = getData();
               
                if (!data[cardId]) return;
                let budget = data[cardId].budget || 0;
                let expense = data[cardId].expense || 0;
                let displayRemain = document.querySelector("#displayRemain");
                displayRemain.style.display = "flex";
                displayRemain.innerHTML = `
        <p><b>Remaining:</b> ${"$" + (budget - data[cardId].expense)}</p>
        `;
            }
            // ===== SHOW PAST DATA =====
           function Show_Past_Data() {
    let data = getData();

    let Show = document.querySelector("#Show");

    Show.innerHTML = "";
    Show.style.display = "none";

    if (!data[cardId]) {
        Show.style.display = "flex";
        Show.innerHTML = "No data saved yet!";
        return;
    }

    let budget = data[cardId].budget || 0;
    let expense = data[cardId].expense || 0;

    Show.style.display = "flex";
    Show.innerHTML = `

        <p><b>Budget:</b> $${budget}</p>
        <p><b>Expense:</b> $${expense}</p>
        <p><b>Remaining:</b> $${budget - expense}</p>
    `;
}
            // ===== RESET EXPENSE =====
            function remove() {
                let data = getData();

               

                if (!data[cardId]) return;

                data[cardId].expense = 0;

                saveData(data);

                document.querySelector("#displayExpense").innerHTML = `
                <p><b>Expense:</b> 0</p>
        `;
                RemainCall();
            }

            // ===== HIDE DATA =====
            function hide() {
                document.querySelector("#Show").innerHTML = "";
                Show.style.display = "";
            }
       
