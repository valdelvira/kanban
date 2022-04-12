import axios from "axios"

class BreweriesService {
    constructor() {
        this.url = "https://api.openbrewerydb.org/"
    }

    getBreweries() {
        return axios.get(this.url + "breweries")
    }
    getBreweriesByName(name) {
        return axios.get(this.url + "breweries?by_name=" + name)
    }
    getBreweriesByState(state) {
        return axios.get(this.url + "breweries?by_state=" + state)
    }
    getBreweriesByCity(city) {
        return axios.get(this.url + "breweries?by_city=" + city)
    }
    getBrewery(id) {
        return axios.get(this.url + "breweries/" + id)
    }
    getSearch(query) {
        return axios.get(this.url + "search?query=" + query)
    }
}

const breweriesService = new BreweriesService()

export default breweriesService