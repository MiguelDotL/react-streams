import axios from "axios";

const DEV_BASE_URL = "http://localhost:3001";

export default axios.create({
    baseURL: DEV_BASE_URL
});
