
const list = document.getElementById("receipt-list")
const priceInput = document.getElementById('item-price')
const nameInput = document.getElementById('item-name')
const categoryInput = document.getElementById("category")
const form = document.getElementById('receipt-form')
const viewCatBtn = document.querySelector("#find-by-category")

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
        price:  priceInput.value,
        name: nameInput.value,
        category: categoryInput.value
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
    .then(json => renderItem(json.data))
}

//add item
let viewCat = false;

function renderItem(){
   
}

viewCatBtn.addEventListener("click", ()=> {
    //when user *clicks* the Find By Category button
    // I want it to hide the All list 
    // show the different category names
    //then the user can *click* each category name and view the transaction for that category

 
 })