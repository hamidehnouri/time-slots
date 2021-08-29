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
        return response.data
      } else {
        console.log("Response Error!")
        return response
      }
    } catch (error) {
      console.log("Request Error!")
      return error
    }
  }
}

export default new ApiService()
