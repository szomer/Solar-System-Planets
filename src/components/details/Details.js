import './details.scss';
import { useParams } from "react-router-dom";

function Details() {

    let { name } = useParams();

    return (<div className="Details">Details</div>);
}

export default Details;