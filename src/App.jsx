import  React,  { useState}   from  "react";
import './App.css';



/* 
let shouldShowLanding = true;

const toggle = () => {
    console.log(shouldShowLanding);
    shouldShowLanding = !shouldShowLanding;
    console.log(shouldShowLanding);
}

const Content = () => {
    let result;
    if (shouldShowLanding) {
        result = <div>Landing Page</div>
    } else {
        result = <div>Home Page</div>
    }
    return result;
}
*/


const App = () => {
    // ciklusok a JS-ben

    let myname = "Bálint";
    let people = [ "Ottó", "Kázmér", "Béla", ];

	return (
        <div>
            <h1>Több «p» elem létrehozása:</h1>
            <p>{ myname }</p>
            <p id="first">First Paragraph</p>
            <hr />
            {   // «p» elemek létrehozása map()-pel:
                people.map( elem => (
                    <div className="card" key={elem}>
                        <p className="myP">{elem}</p>
                    </div>
                    )
                )
            }

            <hr />
            <p className="myP">Third Paragraph</p>
        </div>
    )
};
  
export default App;