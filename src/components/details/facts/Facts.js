import './facts.scss';

function Facts(props) {
    return (<div className="Facts">
        {(props.facts[0].title)}
        {(props.facts[0].content)}
    </div>);
}

export default Facts;