import Fact from './fact/Fact';
import './facts.scss';

function Facts(props) {

    const title = (props.name).charAt(0).toUpperCase() + (props.name).slice(1);
    const facts = (props.facts.facts);
    const numbers = props.facts.numbers;


    return (<div className="Facts">
        <div className='planet-title'>
            <h2 className='display-2'>{title}</h2>
        </div>

        <div className='numbers-container'>
            {numbers.map(item => {
                return <Fact key={item.key} factTitle={item.title} factContent={item.content} />;
            })}
        </div>

        <div className='facts-container'>
            {facts.map(item => {
                return <Fact key={item.key} factTitle={item.title} factContent={item.content} />;
            })}
        </div>
    </div>);
}

export default Facts;