
const list = document.getElementById("receipt-list")

fetch('http://localhost:3000/items')

    .then(r => r.json())
    .then(renderItems)

    function renderItems(arr){
        //debugger
        liElements = arr.map(function(item){
            let li = document.createElement('li')
            li.innerText = `${item.name} - $${item.price}`
            return li
        })  
        //debugger
        liElements.forEach(element =>{
            list.appendChild(element)
        })
       

        
    //.map function without a hash name
    //make sure to return
//attribute with a serializer?


    }

// function renderItem(item){
//     li.dataset["id"] = item.id
//     li.id = 'item=$item.id'
//     li.innerHTML = `
//         <div data-id="${item.id}">
            
//         </div>
//     `
//     li.addEventListener('click', handleLiClick)
    
// }

// function handleLiClick(e){
//     if(e.target.innerText === "Edit"){

//     } else if (e.target.innerText === "Delete"){
//         deleteItem(e)
//     }
// }