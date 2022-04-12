import { useState, useEffect } from "react"
import BreweryList from "../../components/Brewery/BreweryList"
import breweriesService from "../../services/breweries.service"

const BreweriesPage = () => {
    const [breweries, setBreweries] = useState([])

    useEffect(() => {
        loadBreweries()
    }, [])

    const loadBreweries = () => {
        breweriesService
            .getBreweries()
            .then(({ data }) => setBreweries(data))
            .catch(err => console.log(err))
    }

    return (
        <div id="breweries">
            <h1>Breweries</h1>
            <BreweryList breweries={breweries} />

        </div>
    )
}

export default BreweriesPage