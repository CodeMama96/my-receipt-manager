class Budget {
    static URL = 'http://localhost:3000/budgets'
    static all = []

    constructor(name, amount, date){
        this.name = name
        this.amount = amount
        this.date = date

        Budget.all.push(this)

    }


    static fetchBudget(){
        fetch(this.URL)
        .then(r => r.json())
        .then(this.handleBudgetData)
    }



    static handleBudgetData(arr){
        let tr = document.createElement('tr');
        let trElements = arr.map(function(item){
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.amount}</td>
            <td>${item.date}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        return tr
        })

        trElements.forEach(element =>{
            budgetList.appendChild(element)
        })

        tr.addEventListener('click', Budget.handleDelete)


        
    }

    static handleDelete(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }

    }

    static handleBudgetSubmit(e){
        e.preventDefault()
        BudgetApi.createBudgetItem(e)
    }

    renderBudgetItem(){
        console.log(this)
        if (!this.error){
           
            budgetList.innerHTML += 
            `<td>${this.name}</td>
            <td>$${this.amount}</td>
            <td>${this.date}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        } else {
            console.log(this.error)
        } 
        
    }

   handleDelete(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
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
