import './home.scss';
import Planets from './planets/Planets'
import Logo from '../logo/Logo';

function Home() {
    return (<div className="Home">
        <Logo />

        <Planets />

    </div>);
}

export default Home;