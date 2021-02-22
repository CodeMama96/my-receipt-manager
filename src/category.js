

class Category {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('p')
        Category.all.push(this) 
        this.element.classList.add('center')

    }

    render(){
    this.element.innerHTML = `<button class="catBtn">${this.name}</button><br>`
    //this representing an individual category
    }

    addListener(){
        //represents the element on the DOM
        this.element.addEventListener('click', this.handleSubmit)
    }

    handleSubmit = (e) => {
        list.style.display = ''
        //This.renderItem()
       //console.log(this.name)
    
        //unhide recipe-list
        //iterate through the list and .filter by this.name
        
    }

    // showCategories(){
    //    this.renderItem()
    // }


}
    //need an eventlistener for each category item and when that button is clicked,
    //it will show the items for that category
    //find by category button needs to change to "All Transaction" Button