
const list = document.getElementById("receipt-list")
const priceInput = document.getElementById('item-price')
const nameInput = document.getElementById('item-name')
const categoryInput = document.getElementById("category")
const form = document.getElementById('receipt-form')
const viewCatBtn = document.querySelector("#find-by-category")
const categoryList = document.querySelector('#category-list')

//let can be reassigned
const URL = 'http://localhost:3000/items'

fetch(URL)

    .then(r => r.json())
    .then(renderItems)

  
    function renderItems(arr){
        //debugger
        liElements = arr.map(function(item){
            let li = document.createElement('li')
            li.innerText = `${item.name}: $${item.price} - ${item.category.name}`
           
            return li
        })  
        
        liElements.forEach(element =>{
            list.appendChild(element)
        })


    }
const createForm = document.querySelector("#receipt-form")
    createForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
   e.preventDefault()

   //make our params hash
   const itemInfo = {
        price:  e.target.price.value,
        name: e.target.name.value,
        category: e.target.category.value
   }

   const configObj = {
       method: 'POST',
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify(itemInfo)
   }
  
   fetch(URL, configObj)
    .then(r => r.json())
    .then(renderItem)
    e.target.reset()
}

//add item

function renderItem(item){
    //debugger
    if (!item.error){
        list.innerHTML += `<li>${item.name}: $${item.price} - ${item.category.name}</li>`
    } else {
        console.log(item.error)
    }
}

viewCatBtn.addEventListener("click", ()=> {
    //when user *clicks* the Find By Category button
    // I want it to hide the All list 
    list.innerHTML = ""
    categoryList.style.display = ""
    for (let category of Category.all){
        categoryList.innerHTML += `<li>${category.name}</li>`
    }

    // show the different category names
    //then the user can *click* each category name and view the transaction for that category
 
 })

 CategoryApi.getCatgories()
