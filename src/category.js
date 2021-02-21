
const categoryURL = 'http://localhost:3000/categories'

class Category {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name

        Category.all.push(this) 

    }
}
fetch(categoryURL)
    .then(r => r.json())
    .then(renderCategories)

    function renderCategories(){

    }