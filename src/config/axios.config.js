import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.BASE_URL

})

export default axiosInstance