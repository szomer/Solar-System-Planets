import './logo.scss';
import { Link } from 'react-router-dom';

function Logo() {
    return (<div className="Logo">
        <Link to="/"><i className="bi bi-globe-americas"></i></Link>
    </div>);
}

export default Logo;