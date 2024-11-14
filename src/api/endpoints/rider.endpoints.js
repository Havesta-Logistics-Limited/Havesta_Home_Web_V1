import axios from 'axios'

const ridersApi = {
    getAllCountry: async()=>{
       const endpoint = "https://restcountries.com/v3.1/all"
       const response = await axios.get(endpoint)
       console.log(response)
       return response
    },

    getBankNames: async() => {
        const endpoint = "https://api.paystack.co/bank?country=nigeria";
        const res = await axios.get(endpoint)

        const banksArray = res.data.data

        const response = banksArray.map(item => item.name)
        
        return response
    }

}


export default ridersApi