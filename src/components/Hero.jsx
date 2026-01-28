import Galaxy from './Galaxy.jsx'
import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <Galaxy/>
            <div className="hero_content">
                <h1>Best for Practice</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid eligendi eos cumque quaerat facere numquam nemo quisquam neque. Deleniti laborum iure, aliquid id autem cupiditate nam alias expedita recusandae fugiat, optio, quam ullam.</p>
            </div>
            <div className="herobtn">
                <button className="btnp">Primary</button>
                <button className="btnS">Secondary</button>
            </div>
           
           
        </section>

    )
}
export default Hero;