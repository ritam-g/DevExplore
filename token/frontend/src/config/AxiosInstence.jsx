import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})

AxiosInstance.interceptors.request.use()
AxiosInstance.interceptors.response.use(
    // Handle successful responses
    (response) => {
        console.log("interceptor received:", response);
        return response;
    },
    // Handle errors
    (error)=>{
        console.error("interceptor error:", error);
    }
)

export default AxiosInstance;