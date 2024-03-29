import './details.scss';
import { redirect, useParams } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import Return from '../return/Return';
import Logo from '../logo/Logo';
import Planet from './planet/Planet';
import Facts from './facts/Facts';
import planetFacts from './planetfacts';
import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';
import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';
import Error from '../error/Error';

function Details() {

    const { name } = useParams();

    var image;

    switch (name) {
        case "mercury": image = mercury; break;
        case "venus": image = venus; break;
        case "earth": image = earth; break;
        case "mars": image = mars; break;
        case "jupiter": image = jupiter; break;
        case "saturn": image = saturn; break;
        case "uranus": image = uranus; break;
        case "neptune": image = neptune; break;
        default: return (<Error></Error>);
    }

    const planetData = planetFacts.filter(item => (item.planet === name))[0];

    return (<div className="Details">
        <Logo />
        <Return url="planets" />

        <Container id="planet-container" fluid>
            <Row id="planet-row" >
                <Col id="planet-text" >
                    <Facts name={name} facts={planetData} />
                </Col>
                <Col id="planet-planet" >
                    <Planet img={image} />
                </Col>
            </Row>
        </Container>

    </div>);
}

export default Details;