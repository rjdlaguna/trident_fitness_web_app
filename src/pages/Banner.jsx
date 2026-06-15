// Banner.jsx
import '../pages/Banner.css'
import Slider from './Slider.jsx'

export default function Banner() {
    return (
        <div className='banner-container' id="banner-section">
            <Slider />
            <div className='banner-heading'>
                <p>TRAIN HARD.</p>
                <p>LIVE STRONG.</p>
            </div>
            <div className='banner-text'>
                <p>
                    At Trident Fitness, we believe fitness is more than a routine—it’s a lifestyle rooted in strength, confidence, and long‑term well‑being. Our mission is to help people of all ages and fitness levels reach their health goals through expert coaching, science‑based training, and a supportive, motivating community.
                </p>
                <button>
                    BEGIN YOUR JOURNEY
                </button>
            </div>

        </div>
    )
}