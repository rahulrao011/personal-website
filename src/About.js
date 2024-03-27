import './About.css';
import {useEffect} from 'react';

function About() {

    useEffect(() => {
        // this is for the glow effect that follows the mouse

        let cursor = document.getElementById("circle");
        document.body.onpointermove = event => {
          const {clientX, clientY} = event;
          cursor.style.left = `${clientX}px`;
          cursor.style.top = `${clientY}px`;
        }
      }, []);

    return (
        <div className="About">

            <h1 className="text">Test</h1>

            <div id="circle"></div>
        </div>
    );
}

export default About;
