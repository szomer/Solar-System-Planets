import './start.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import startImage from './startImage.gif'
import { Link } from 'react-router-dom';
import Credit from './credit/Credit';


function Start() {
    return (<div className="Start">
        <Container className="start-container" fluid>
            <Row className='start-container-row  d-flex justify-content-center align-items-center'>
                <Col md="8" className='text-center  d-inline justify-content-center' >
                    <h2 className='display-1'>Discover the Planets of our Solar System!</h2>
                    <Link to="/planets">
                        <p>Dive in</p>
                        <p><i className="bi bi-arrow-down-short"></i></p>
                    </Link>
                    <img alt='animated illustration of a planet in black and white' src={startImage} />
                </Col>
            </Row>
        </Container>

        <Credit />
    </div>);
}

export default Start;