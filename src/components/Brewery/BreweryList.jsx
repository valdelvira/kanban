import { Row, Col } from "antd"
import BreweryCard from "./BreweryCard/BreweryCard"

const BreweryList = ({ breweries }) => {
    return (
        <Row gutter={[14, 20]}>
            {breweries.map(brewery => {
                return (
                    <Col span={8} key={brewery.id}>
                        <BreweryCard {...brewery} />
                    </Col>
                )
            }
            )}
        </Row>
    )
}

export default BreweryList