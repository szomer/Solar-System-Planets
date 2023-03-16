import './fact.scss';

function Fact(props) {

    const title = props.factTitle;
    const content = props.factContent;

    return (<div className="Fact">
        <h3 className='fact-title'>
            {title}
        </h3>
        <p className='fact-content'>
            {content}
        </p>

    </div>)
}


export default Fact;