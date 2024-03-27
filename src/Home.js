import {useEffect} from 'react';
import './Home.css';
import ProjectCardDisplay from './ProjectCardDisplay';

function Home() {

    useEffect(() => {
        // this is for the binary hacked effect

        function shuffle(array) {
            
            let currentIndex = array.length,  randomIndex;
            while (currentIndex > 0) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
          
            return array;
        }

        //const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letters = "01";
        let element = document.getElementById("homeTitle");
        let text = element.dataset.value;
        let arr = [...Array(text.length).keys()];
        
        element.onpointerenter = event => {
            shuffle(arr);
            let iterations = 0;
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("").map((letter, index) => {
                    if(arr[index] < iterations){
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");
                if(iterations >= event.target.dataset.value.length){
                    clearInterval(interval);
                }
                iterations += 1;
            }, 150);
        }
    }, []);


    useEffect(() => {
        // this is for the glow effect that follows the cursor and for the cursor magnification over the projects text

        let cursorAura = document.getElementById("cursorAura");
        let cursor = document.getElementById("circle");

        document.body.onpointermove = event => {
          const {clientX, clientY} = event;

          cursor.style.left = `${clientX}px`;
          cursor.style.top = `${clientY}px`;

          cursorAura.animate({
            left: `${clientX}px`,
            top: `${clientY}px`,
          }, {duration: 3000, fill: "forwards"}
          );
        }
      }, []);

      let projects = [{id: 1, image: 'logo192.png', title: 'Title 1', text: 'Text 1', link: 'https://www.google.com/'}, {id: 2, image: 'logo512.png', title: 'Title 2', text: 'Text 2', link: 'https://www.tesla.com/'}];

    return (
        <div className="Home">
            <div id="cursorAura"></div>
            <div id="blur"></div>

            <h1 data-value="Rahul Rao" id="homeTitle">Rahul Rao</h1>
            <img src="./pictures/Rahul_Rao_picture_1.jpg" id="pic"></img>
            <p id="info">Hi! I'm Rahul Rao, a Junior at the University of Wisconsin-Madison studying computer science and data science. I like to play table tennis, chess, and go hiking. I am interested in machine learning research, computational science, and web development.</p>

            <h1 id="projectsTitle">Projects</h1>
            <div id="circle"></div>

            <ProjectCardDisplay projects={projects}/>
        </div>
    );
}

export default Home;