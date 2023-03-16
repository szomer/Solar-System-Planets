import './fact.scss';

function Fact(props) {

    const title = props.factTitle;
    const content = props.factContent;

    return (<div className="Fact">
        <h3 className='fact-title'>
            {title}
        </h3>
        <div className='fact-content'>
            <p>{content}</p>
        </div>

    </div>)
}


export default Fact;