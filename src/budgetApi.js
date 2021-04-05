class BudgetApi {

    static budgetHerokuUrl = 'http://cryptic-cove-15090.herokuapp.com/budgets'
    static URL ='http://localhost:3000/budgets'
    
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

        fetch(this.URL, confidObj)
        .then(r => r.json())
        .then(json => {
            
            let budget= new Budget(json)
            budget.renderBudgetItem()
        })
        console.log("hello")
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

        fetch(this.URL+`/${budget.id}`, confidObj)
        .then(r => r.json())
        
        .then(data => console.log(data))
        
    }


}