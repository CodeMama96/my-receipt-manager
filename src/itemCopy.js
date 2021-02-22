class Item {

    static URL = 'http://localhost:3000/items'
    static receiptForm = document.querySelector("#receipt-form");

    static all = []

    constructor({name, date, price, description, category}){
        this.name = name
        this.date = date
        this.price = price
        this.description = description
        this.category = category

        Item.all.push(this)
        //initalize, set properties of each item
    }

    static fetchItems(){
        fetch(this.URL)
            .then(r => r.json())
            .then(this.handleData)  
    }


    static handleData(arr){

        let liElements = arr.map(function(item){
            new Item(item)
            let li = document.createElement('li')
            li.innerHTML = `${item.name}: $${item.price} - ${item.category.name} `
        
            return li
        })  
        
        liElements.forEach(element =>{
            list.appendChild(element)
        })

    }


    static handleSubmit(e){
        e.preventDefault()
        ItemApi.createItem(e)
    }

    static renderItem(item){
        if (!item.error){
            new Item(item)
            list.innerHTML += `<li>${item.name}: $${item.price} - ${item.category.name}</li>`
        } else {
            console.log(item.error)
        }
    }

}


