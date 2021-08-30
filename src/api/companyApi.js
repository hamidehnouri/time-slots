import * as apiConfig from "api/apiConfig"
import http from "services/apiService"

const companyApi = {
    async getCompanies() {
        let url = apiConfig.COMPANIES
        return await http.httpRequest(apiConfig.GET, url)
    }
}

export default companyApi
