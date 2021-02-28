class Budget {
    static URL = 'http://localhost:3000/budgets'
    static all = []

    constructor({name, amount, date, id}){
        this.name = name
        this.amount = amount
        this.date = date
        this.id = id

        Budget.all.push(this)

    }


    static fetchBudget(){
        fetch(this.URL)
        .then(r => r.json())
        .then(this.handleBudgetData)
    }



    static handleBudgetData(arr){
      
        let trElements = arr.map(function(item){
         
            new Budget(item)
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.amount}</td>
            <td>${item.date}</td>
            <td><button id='${item.id}' class="btn btn-danger btn-sm delete">X</button></td>
        
        `;
        tr.querySelector('button').addEventListener('click', Budget.handleDelete)
        return tr
        })

        trElements.forEach(element =>{
            budgetList.appendChild(element)
        })

        


        
    }

    static handleDelete(element){
      
        if(element.target.classList.contains('delete')){
            element.target.parentElement.parentElement.remove();
            let budget = Budget.all.find(b => b.id == element.target.id)
           
            BudgetApi.deleteBudgetItem(budget)
        }

    }

    static handleBudgetSubmit(e){
        e.preventDefault()
        BudgetApi.createBudgetItem(e)
    }

    renderBudgetItem(){
        console.log(this)
       // debugger
        if (!this.error){
           
            budgetList.innerHTML += 
            `<td>${this.name}</td>
            <td>$${this.amount}</td>
            <td>${this.date}</td>
            <td><button class="btn btn-danger btn-sm delete">X</button></td>
        `;
        } else {
            console.log(this.error)
        } 
        
    }

  

    static alrt(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const budgetContainer = document.querySelector('.budget-container')
        const form = document.querySelector('#budget-form');
        budgetContainer.insertBefore(div, form);
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static clearEntries(){
        document.getElementById('budget-form').reset()
    }


}
