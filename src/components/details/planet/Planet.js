import './planet.scss';

function Planet(props) {

    const planetImg = props.img;


    return (<div className="Planetlg">

        <img src={planetImg} />

    </div>);
}

export default Planet;