import axios from 'axios'

export const getListOfItems = (items) => {

    const ListOfItems = []

    const addItem = (item) => {
        const newItem = {}
        newItem.name = item.name
        newItem.image = item.sprites.default

        ListOfItems.push(newItem)
    }

    Promise.all(items.map((res) => axios.get(res.url)))
        .then((response) => {
            //Array of items of category
            response.map((res) => addItem(res.data))
        })

    return ListOfItems
}