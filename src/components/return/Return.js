import './return.scss';
import { Link } from 'react-router-dom';

function Return(props) {
    return (<div className="Return">

        <Link to={"/" + props.url}><i className="bi bi-arrow-left-circle"></i></Link>
    </div>);
}

export default Return;