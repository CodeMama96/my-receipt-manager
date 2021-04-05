
class CategoryApi {

    static herokuURL = 'http://cryptic-cove-15090.herokuapp.com/categories'
    static URL = 'http://localhost:3000/categories'

    

    static getCatgories () {
        fetch(this.URL)
        .then(r => r.json())
        .then(data => {
            for(let category of data){
                new Category(category) //ctegory represents each id name hashes
                //new Category object based on id and name
            }
            for(let category of Category.all){
                document.getElementById("cat-list").innerHTML += `<option value="${category.name}">${category.name}</option>`
               }
        })
    }
}