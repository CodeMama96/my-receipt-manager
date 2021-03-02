class BudgetApi {

    static budgetUrl = 'http://localhost:3000/budgets'

    static createBudgetItem(e) {

        const budgetInfo ={
            name: e.target.name.value,
            amount: e.target.amount.value,
            date: e.target.date.value
        }

        const confidObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(budgetInfo)
        }

        fetch(this.budgetUrl, confidObj)
        .then(r => r.json())
        .then(json => {
            //debugger
            let budget= new Budget(json)
            budget.renderBudgetItem()
        })
        e.target.reset()
    }

    static deleteBudgetItem(budget){
       
        const confidObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(budget)
        }

        fetch(this.budgetUrl+`/${budget.id}`, confidObj)
        .then(r => r.json())
        
        .then(data => console.log(data))
        
    }


}