const categoryList = document.querySelector('category-list')
const categoryURL = 'http://localhost:3000/categories'

fetch(categoryURL)
    .then(r => r.json())
    .then(renderCategories)

    function renderCategories(){

    }