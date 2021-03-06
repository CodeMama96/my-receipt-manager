class Item {

    static URL = 'https://cryptic-cove-15090.herokuapp.com/items'
    static receiptForm = document.querySelector("#receipt-form");

    static all = []

    constructor({name, price, category}){
        this.name = name
        this.price = price
        this.category = category

        Item.all.push(this)
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

    renderItem(){ //1.static 
        console.log(this)
        if (!this.error){
        
            list.innerHTML += `<li>${this.name}: $${this.price} - ${this.category.name}</li>`
        } else {
            console.log(this.error)
        } 
    }
}


