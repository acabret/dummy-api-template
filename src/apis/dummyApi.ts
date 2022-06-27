import axios from "axios";

const dummyApi = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/users" });

export default dummyApi;
