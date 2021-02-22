
const list = document.getElementById("receipt-list")
const priceInput = document.getElementById('item-price')
const nameInput = document.getElementById('item-name')
const categoryInput = document.getElementById("category")
const form = document.getElementById('receipt-form')
const viewCatBtn = document.getElementById("find-by-category")
const categoryList = document.querySelector('#category-list')


//let can be reassigned

Item.fetchItems()

Item.receiptForm.addEventListener('submit', Item.handleSubmit);


viewCatBtn.addEventListener("click", ()=> {
    list.innerHTML = ""
    viewCatBtn.style.visibility = ""

    for (let category of Category.all){
        categoryList.innerHTML += `<p style="text-align:center">
        <button class="catBtn">${category.name}</button><br></p>
        `
    }
})

CategoryApi.getCatgories()
