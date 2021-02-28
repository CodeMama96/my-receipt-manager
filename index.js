
const list = document.getElementById("receipt-list")
const priceInput = document.getElementById('item-price')
const nameInput = document.getElementById('item-name')
const categoryInput = document.getElementById("category")
const form = document.getElementById('receipt-form')
const viewCatBtn = document.getElementById("find-by-category")
const categoryList = document.querySelector('#category-list')
const tContainer = document.querySelector("body > div.transaction-container.mt-4")

const budgetForm = document.querySelector('budget-form')
const budgetList = document.querySelector('#budget-list')

//let can be reassigned

Item.fetchItems()

//Interface.displayBudget()
Item.receiptForm.addEventListener('submit', Item.handleSubmit);
document.getElementById('hide_me').addEventListener('click', function () {
    this.style.display = 'none';
    tContainer.style.display = 'none';
    
  });

viewCatBtn.addEventListener("click", ()=> {
    list.innerHTML = ""
    categoryList.style.display = ""
    //viewCatBtn.innerHTML = 'All'

    for (let category of Category.all) { 
        category.render()
        categoryList.append(category.element)
        category.addListener()
        category.handleSubmit()
    
    }
})

Budget.fetchBudget()
//Budget.budgetForm.addEventListener('submit', Budget.handleBudgetSubmit);


const sortBtn = document.querySelector("#sort-by-price");

sortBtn.addEventListener('click', sortPrice);
//<button id="sort-by-price">Sort By Price</button>
          
function sortPrice (){

    let sort =  Item.all.sort((itemA, itemB) => itemA.price - itemB.price); //swap for other order
    list.innerHTML = ""
    for (const item of sort){
        let li = document.createElement('li')
            li.innerHTML = `${item.name}: $${item.price} - ${item.category.name} `
        list.append(li);
    }
}

CategoryApi.getCatgories()


