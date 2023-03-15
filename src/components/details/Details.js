import './details.scss';
import { useParams } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import Return from '../return/Return';
import Logo from '../logo/Logo';

function Details() {

    let { name } = useParams();

    return (<div className="Details">
        <Logo />
        <Return url="solarsystem" />

        <Container id="planet-container" fluid>
            <Row id="planet-row" >
                <Col id="planet-text" >
                    {name}

                </Col>
                <Col id="planet-planet" >
                    Image here
                </Col>
            </Row>
        </Container>

    </div>);
}

export default Details;