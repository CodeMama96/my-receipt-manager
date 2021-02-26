class BudgetApi {

    static getBudgets () {
        fetch('http://localhost:3000/budgets')
        .then(r => r.json())
        .then(data => {
            for(let budget of data){
                new Budget(budget) //ctegory represents each id name hashes
                //new budget object based on id and name
            }
            for(let budget of Budget.all){
                document.getElementById("budget-list").innerHTML += `<option value="${budget.name}">${budget.name}</option>`
               }
        })
    }
}