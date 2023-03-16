import { Link } from 'react-router-dom';
import './error.scss';

function Error() {
    return (<div className="Error">
        <h2 className='display-2'>Error 404</h2>
        <hr />
        <p>This page you were trying to reach, does not exist!<br />Return to the homepage.</p>
        <p><Link to="/">Click Here</Link></p>
    </div>)
}

export default Error;