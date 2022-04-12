import { Row, Col } from "antd"
import BreweryCard from "./BreweryCard/BreweryCard"

const BreweryList = ({ breweries }) => {
    return (
        <Row gutter={[14, 20]}>
            {breweries.map(brewery => {
                return (
                    <Col span={8}>
                        <div key={brewery.id}>
                            <BreweryCard {...brewery} />
                        </div>
                    </Col>
                )
            }
            )}
        </Row>
    )
}

export default BreweryList