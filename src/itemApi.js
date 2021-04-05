//fetch requests here

class ItemApi{

    static herokuURL = 'http://cryptic-cove-15090.herokuapp.com/items'
    static URL ='http://localhost:3000/items'

    static createItem(e){
        //ItemApi.itemIfo

        const itemInfo = {
            price:  e.target.price.value,
            name: e.target.name.value,
            category: e.target.category.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(itemInfo)
        }

        fetch(this.URL, configObj)
            .then(r => r.json())
            .then(json => {
                let item = new Item(json) //creates item object
                item.renderItem()
            })
            e.target.reset()
    }
}

  