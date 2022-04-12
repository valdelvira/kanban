import { Card } from "antd"
import { Link } from "react-router-dom"

const BreweryCard = ({ name, street, city, state, country }) => {
    return (
        <Card title={name} extra={<Link to="#">More</Link>} style={{ width: 300 }}>
            <div className="brewery-card">
                <div className="brewery-card-header">
                    <div className="brewery-card-header-address">
                        <p>{street}</p>
                        <p>{city}, {state}</p>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default BreweryCard 