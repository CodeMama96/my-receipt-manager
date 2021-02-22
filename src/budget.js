class Budget {
    static all = []
    constructor(name, amount, date){
        this.name = name
        this.amount = amount
        this.date = date
        //this.wallet = 5000
        

        Budget.all.push(this)
    
        //static displayWallet(){
            //
            //entry that allows user to set their wallet
            //add money to wallet and 
            //then each entry would take away from the wallet

            //update message saying "You have this $${wallet} in your wallet"

            //reduce method?

        //}
    }
}

class Interface {
    static displayBudget(){
        const expenses = StoreEntries.getExpense();
    
        expenses.forEach((expense) => Interface.addEntry(expense));

    }

    static addEntry(expense){
        const expenseList = document.querySelector('#expense-list')
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount}</td>
            <td>${expense.date}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        // const total = document.querySelector("#total")
        // row.innerHTML = `
        //     <td>${expense.name}</td>``


        expenseList.appendChild(row);

    }
    static deleteExpense(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }

    }

    static alrt(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const expenseContainer = document.querySelector('.expense-container')
        const form = document.querySelector('#expense-form');
        expenseContainer.insertBefore(div, form);
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }

    static clearEntries(){
        document.getElementById('expense-form').reset()
    }
}

class StoreEntries{
    static getExpense(){
        //this is getting the budget entries
        let expenses;
        if(localStorage.getItem('expenses') === null) {
            expenses = [];
        }else{
            expenses = JSON.parse(localStorage.getItem('expenses'));
        }
        return expenses
    }

    static addExpense(expense) {
        const expenses = StoreEntries.getExpense();
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    static removeExpense(id) {
        //remove by id
        const expenses = StoreEntries.getExpense();
        expenses.forEach((expense, index)=>{
            if(expense.id === id){
                expenses.splice(index, 1);
            }
        });
        localStorage.setItem('expenses', JSON.stringify(expenses)); //put in local storage
    }

   

        //totaling the entries, both expenses and income items. 
        // const total = expenses.reduce((total, expense) => {
        //     return (expense.amt === amt) ? total + expense[element_to_add] : total;
        // }, 0)
        static getTotalAmountForExpenses(expense) {
            let totalPrice = 0;
            
            expense.forEach(function(item) {
              totalPrice += item.amount;
            });
          
            return totalPrice;
          
          

        // need an update 
        // const totalShow = document.querySelector('#total')
        // const p = document.createElement('tr')
        // const expenses = StoreEntries.getExpense();
        // const total = expenses.reduce((total, expense)=>{
        //     return (expense.amt === amt) ? total + expense[element_to_add] : total;
        //     }, 0)
        //     totalShow.appendChild(p)
        };

    
    }


document.addEventListener('DOMContentLoaded', Interface.displayBudget);

//add an expense

document.querySelector('#expense-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const amount = document.querySelector('#amount').value;
    const date = document.querySelector('#date').value;

    //validate

    if(name === '' || amount === '' || date === ''){
      Interface.alrt('Please fill in missing fields.');
    } else {
      const expense = new Budget(name, amount, date);

    //add book to user interface
      Interface.addEntry(expense);
      StoreEntries.addExpense(expense)
      Interface.alrt('Expense Added')
      Interface.clearEntries();
    }
 
});


document.querySelector('#expense-list').addEventListener('click', (e) => {
    Interface.deleteExpense(e.target);
    StoreEntries.removeExpense
    (e.target.parentElement.previousElementSibling.innerText);
    Interface.alrt('Expense Removed')
    
})


StoreEntries.getTotalAmountForExpenses();
        