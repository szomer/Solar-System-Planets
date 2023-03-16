import './planet.scss';
import { Link } from 'react-router-dom';


function Planet(props) {

    const planetName = props.name;
    const planetImg = props.img;

    return (<div className="Planet">
        <Link to={"/planets/" + planetName} >
            <img src={planetImg} /></Link>
    </div>);
}

export default Planet;