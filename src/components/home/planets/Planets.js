import './planets.scss';
import Planet from './planet/Planet';
import sun from './images/sun.png';
import mercury from './images/mercury.png';
import venus from './images/venus.png';
import earth from './images/earth.png';
import mars from './images/mars.png';
import jupiter from './images/jupiter.png';
import saturn from './images/saturn.png';
import uranus from './images/uranus.png';
import neptune from './images/neptune.png';

function Planets() {
    return (<div className="Planets">
        <div className='solar-container'>
            <div className='sun-container'>
                <Planet name="sun" img={sun} />
            </div>

            <div className='planets-container'>

                <div className='mercury-container'>
                    <Planet name="mercury" img={mercury} />
                    <div className='detail'>
                        <div className='detail-text'><span>Mercury</span></div>
                        <div className='detail-line mercury-line'></div>
                    </div>
                </div>
                <div className='venus-container'>
                    <Planet name="venus" img={venus} />
                    <div className='detail'>
                        <div className='detail-text'><span>Venus</span></div>
                        <div className='detail-line venus-line'></div>
                    </div>
                </div>
                <div className='earth-container'>
                    <Planet name="earth" img={earth} />
                    <div className='detail'>
                        <div className='detail-text'><span>Earth</span></div>
                        <div className='detail-line earth-line'></div>
                    </div>
                </div>
                <div className='mars-container'>
                    <Planet name="mars" img={mars} />
                    <div className='detail'>
                        <div className='detail-text'><span>Mars</span></div>
                        <div className='detail-line mars-line'></div>
                    </div>
                </div>
                <div className='jupiter-container'>
                    <Planet name="jupiter" img={jupiter} />
                    <div className='detail'>
                        <div className='detail-text'><span>Jupiter</span></div>
                        <div className='detail-line jupiter-line'></div>
                    </div>
                </div>
                <div className='saturn-container'>
                    <Planet name="saturn" img={saturn} />
                    <div className='detail'>
                        <div className='detail-text'><span>Saturn</span></div>
                        <div className='detail-line saturn-line'></div>
                    </div>
                </div>
                <div className='uranus-container'>
                    <Planet name="uranus" img={uranus} />
                    <div className='detail'>
                        <div className='detail-text'><span>Uranus</span></div>
                        <div className='detail-line uranus-line'></div>
                    </div>
                </div>
                <div className='neptune-container'>
                    <Planet name="neptune" img={neptune} />
                    <div className='detail'>
                        <div className='detail-text'><span>Neptune</span></div>
                        <div className='detail-line neptune-line'></div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    );
}

export default Planets;