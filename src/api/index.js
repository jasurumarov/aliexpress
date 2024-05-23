import axios from "axios";

const mainURL = axios.create({
    baseURL: "https://dummyjson.com"
})

export default mainURL