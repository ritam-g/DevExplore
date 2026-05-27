import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

AxiosInstance.interceptors.request.use()
AxiosInstance.interceptors.response.use(
    // Handle successful responses
    (response) => {
        console.log("interceptor received:", response);
        return response;
    },
    // Handle errors
    async (error) => {
        // her logic will if 401 hten call to get refresh token ok then get new access token
        //! also i ahve make taht logic will call only one time when refresh token expire
        console.log("interceptor error:", error.config);

        const originalRequest = error.config;
        if (error.response.status === 401 || !originalRequest.retry) {
            originalRequest.retry = true;
            try {
                await AxiosInstance.get('/auth/refresh-token')
                return AxiosInstance(originalRequest)
            } catch (error) {
                console.log(error)
            }

        }
        return Promise.reject(error);
    }
)

export default AxiosInstance;