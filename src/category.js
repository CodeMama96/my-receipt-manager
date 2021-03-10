

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

    handleSubmit = (f) => {
  
        if(f){
           // debugger
            let filterItem = Item.all.filter(catItem=> catItem.category.name === f.target.innerText)

            list.innerHTML = ""
            
            for (let item of filterItem){
            
                item.renderItem()
                
            }
            
        }
         
    }

}
    //need an eventlistener for each category item and when that button is clicked,
    //it will show the items for that category
    //find by category button needs to change to "All Transaction" Button