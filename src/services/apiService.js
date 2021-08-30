import axios from "axios/dist/axios.min"
import * as apiConfig from "api/apiConfig"

class ApiService {
    async httpRequest(method, url, data) {
        const config =
            method === apiConfig.POST
                ? { headers: { "Content-Type": "application/json" } }
                : {}
        try {
            const response = await axios[method](url, data, config)
            if (response && response.data) {
                return { data: response.data }
            } else {
                return { error: "Response Error!" }
            }
        } catch (error) {
            return {
                error: "Unable to handle request, check server connection!"
            }
        }
    }
}

export default new ApiService()
