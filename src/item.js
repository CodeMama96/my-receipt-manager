class Item{


   /// static all = []//instances that I don't need copies of, call on the class itself. 
    //hoping this won't copy the original seed data (had an issue with data repeating itself)

    constructor(name, date, price, description, category_id){
        this.name = name
        this.date = date
        this.price = price
        this.description = description
        this.category_id = category_id
        //initalize, set properties of each item
    }
}

//new Item({id: element.id, ...element})