
const list = document.getElementById("receipt-list")
const priceInput = document.getElementById('item-price')
const nameInput = document.getElementById('item-name')
const categoryInput = document.getElementById("category")
const form = document.getElementById('receipt-form')
const viewCatBtn = document.getElementById("find-by-category")
const categoryList = document.querySelector('#category-list')
const tContainer = document.querySelector("body > div.transaction-container.mt-4")

//let can be reassigned

Item.fetchItems()
Interface.displayBudget()
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
       
       //Item.renderItem()
    }

    // based on category.name, show the items from that category.

})


const sortBtn = document.querySelector("#sort-by-price");

sortBtn.addEventListener('click', sortPrice);

function sortPrice (){
    debugger
    //if we use this, then we need an arrow function, sets value the moment the function is executed
    //.sort by price

    let sort =  Item.all.sort((itemA, itemB) => itemA.price - itemB.price); //swap for other order
    list.innerHTML = ""
    for (const item of sort){
        let li = document.createElement('li')
            li.innerHTML = `${item.name}: $${item.price} - ${item.category.name} `
        list.append(li);
    }
    //this is for a class

    //debugger
}

CategoryApi.getCatgories()


