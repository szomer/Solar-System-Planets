import './planet.scss';
import circle from '../images/circle2.png'

function Planet(props) {

    const planetImg = props.img;


    return (<div className="Planetlg">
        <div className='circle'>
            <img alt='circle with a border that floats around the planet' src={circle} />
        </div>
        <img alt='planet of the solar system' id="planet-img" src={planetImg} />

    </div>);
}

export default Planet;