import './planet.scss';
import circle from '../images/circle2.png'

function Planet(props) {

    const planetImg = props.img;


    return (<div className="Planetlg">
        <div className='circle'>
            <img alt='' src={circle} />
        </div>
        <img id="planet-img" src={planetImg} />

    </div>);
}

export default Planet;