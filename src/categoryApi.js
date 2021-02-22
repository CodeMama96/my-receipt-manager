
class CategoryApi {

    static getCatgories () {
        fetch("http://localhost:3000/categories")
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