import instance from "./"
import axios from "axios"
import { getListOfItems } from "./getListOfItems"
const limit = 20
const ListOfCategories = []

const addCategory = (category) => {
    const newCategory = {}
    newCategory.name = category.name
    newCategory.list = getListOfItems(category.items)

    ListOfCategories.push(newCategory)
}
        
export const getListOfCategories = () =>
    instance
        .get(`/item-category?limit=${limit}`)
        .then((res) => {
            return Promise.all(res.data.results.map((item) => axios.get(item.url)))
        })
        .then((categories) => {
            //Array of Categories
            categories.map((res) => addCategory(res.data))
            return ListOfCategories
        })