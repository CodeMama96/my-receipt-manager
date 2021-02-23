//fetch requests here

class ItemApi{

    static URL = 'http://localhost:3000/items'

    createItem(e){
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
            .then(Item.renderItem)
            e.target.reset()
    }
}

  