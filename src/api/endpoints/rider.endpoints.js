import axios from 'axios'

const countryApi = {
    getAllCountry: async()=>{
       const endpoint = "https://restcountries.com/v3.1/all"
       const response = await axios.get(endpoint)
       console.log(response)
       return response
    }
}


export default countryApi