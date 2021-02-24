

class Category {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('p')
        //this.category_id = category_id
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
          
            let filterItem = Item.all.filter(catItem=> catItem.category.name === f.target.innerText)

            list.innerHTML = ""
            for (let item of filterItem){
                item.renderItem(item)
            }
        
        }
        // for (let item of Item.all){
            
        //     if (item.category){
        //         Item.all.filter
        //      this.Item.renderItem(item)
        //      ///onsole.log(item.category)
        //      item.style.display = '';
        // } else {
        //     item.element.style.display = "none";
        //     //console.log(this.name)
        // }

        //Item.sort(category.name)?
    }

    // filterCategory(f){
    //     if(f){
    //         for (let item of Item.all){
    //                 debugger
    //             if (item.category){
    //                 Item.all.filter
    //             ///onsole.log(item.category)
    //             item.style.display = '';
    //             } else {
    //             item.style.display = "none";
    //             //console.log(this.name)
    //             }
    //         }

        
    //     }
    // }


   


}
    //need an eventlistener for each category item and when that button is clicked,
    //it will show the items for that category
    //find by category button needs to change to "All Transaction" Button