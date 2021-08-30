import React, { useEffect } from "react"
import companyApi from "api/companyApi"
import Companies from "components/Companies"

const Body = () => {
    const [companies, setCompanies] = React.useState([])
    const getCompanies = async () => {
        const result = await companyApi.getCompanies()
        if (result.data) setCompanies(result.data)
        else if (result.error) alert(result.error)
    }

    useEffect(() => {
        getCompanies()
    }, [])

    return <Companies companies={companies} />
}

export default Body
