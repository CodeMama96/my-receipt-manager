

class Category {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name

        Category.all.push(this) 

    }
}

    //find by category button needs to change to "All Transaction" Button