import Galaxy from './Galaxy.jsx'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <Galaxy />
            <div className="hero_content">
                <h1>Best for Practice</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sed corrupti pariatur dolorem dicta. Voluptas distinctio aliquid mollitia dolorum tempora aut itaque! Exercitationem aliquam sapiente corporis minus amet iste laborum saepe ipsa explicabo repellendus! ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro asperiores debitis quidem officiis sint placeat! Dolore et blanditiis ullam ducimus rem nesciunt, illum quibusdam ratione ipsum fugiat hic nisi enim sequi voluptate quia. ipsum dolor sit amet, consectetur adipisicing elit. Pariatur magnam, itaque facilis deleniti earum minima dignissimos. Sapiente corrupti eligendi architecto maiores ex cupiditate facere vitae ea ab corporis. Molestias debitis fugit adipisci soluta magnam! ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid eligendi eos cumque quaerat facere numquam nemo quisquam neque. Deleniti laborum iure, aliquid id autem cupiditate nam alias expedita recusandae fugiat, optio, quam ullam.</p>
            </div>
            <div className="herobtn">
                <button className="btnp">Primary</button>
                <button className="btnS">Secondary</button>
            </div>


        </section>

    )
}
export default Hero;