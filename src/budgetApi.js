class BudgetApi {

    static budgetUrl = 'http://localhost:3000/budgets'

    static createBudgetItem () {
      

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
            let item = new Budget(json) //creates item object
            item.renderBudget()
        })
        e.target.reset()
    }


}