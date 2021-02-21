class Item{

    constructor(name, date, price, description, category){
        this.name = name
        this.date = date
        this.price = price
        this.description = description
        this.category = category
        //initalize, set properties of each item
    }

}

class ItemInterface {
    static displayItems(){
       
    }

    static addItemsToList(item){
       // const itemList = document.getElementById("receipt-list")

       //const itemRow = document.createElement('tr');

       //itemRow.innerHTML = `
        // <td>${item.name}</td>
        // <td>${item.name}</td>
        // <td>${item.name}</td>
        // <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
        //;


        //this.addItemsToList.append(row);
    }
}



// const priceInput = document.getElementById('item-price')
// const nameInput = document.getElementById('item-name')

// const form = document.getElementById('receipt-form')


// //let can be reassigned
// const URL = 'http://localhost:3000/items'

// fetch(URL)
//     .then(r => r.json())
//     .then(renderItems)
  
//     function renderItems(arr){
//         //debugger
//         liElements = arr.map(function(item){
//             let li = document.createElement('li')
//             li.innerText = `${item.name}: $${item.price} - ${item.category.name}`
           
//             return li
//         })  
        
//         liElements.forEach(element =>{
//             list.appendChild(element)
//         })


//     }
// const createForm = document.querySelector("#receipt-form")
//     createForm.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//    e.preventDefault()

//    //make our params hash
//    const itemInfo = {
//         price:  e.target.price.value,
//         name: e.target.name.value,
//         category: e.target.category.value
//    }

//    const configObj = {
//        method: 'POST',
//        headers: {
//            "Content-Type": "application/json",
//            Accept: "application/json"
//        },
//        body: JSON.stringify(itemInfo)
//    }
  
//    fetch(URL, configObj)
//     .then(r => r.json())
//     .then(renderItem)
//     e.target.reset()
// }

// //add item

// function renderItem(item){
//     //debugger
//     if (!item.error){
//         list.innerHTML += `<li>${item.name}: $${item.price} - ${item.category.name}</li>`
//     } else {
//         console.log(item.error)
//     }
// }
