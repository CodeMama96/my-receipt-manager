class Item {

    static URL = 'http://localhost:3000/items'
    static receiptForm = document.querySelector("#receipt-form");
    //calls on class itself.
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
           
            let itemObj =  new Item(item)
            // itemObj.render()
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
        
        //Item.all.forEach(this =>
        //create non static function here
    }



}


