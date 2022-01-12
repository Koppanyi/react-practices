import  React,  { useState}   from  "react";
import './App.css';

let myname = "Bálint";

// ciklusok a JS-ben
let people = [ "Ottó", "Kázmér", "Béla",   ];

let shouldShowLanding = true;

/* 
const toggle = () => {
    console.log(shouldShowLanding);
    shouldShowLanding = !shouldShowLanding;
    console.log(shouldShowLanding);
}
*/


/*
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
    
    const [pageName, setPageName] = useState("Home");
    const [shouldShowLanding, setshouldShowLanding] = useState(true);

    const toggle = () => {
        setshouldShowLanding(!shouldShowLanding)
        console.log(shouldShowLanding);
    }

	return (
        <div>
            <h1>Hello World</h1>
            <p id="first">First Paragraph</p>
            <p>{ myname }</p>
            <input type="password" placeholder="akármi" />
            {  
                people.map(p => (
                    <div className="card" key={p}>
                        <p className="card-content">{p}</p>
                    </div>
                    )
                )
            }
            <p className="myp">Third Paragraph</p>
            <div>{ shouldShowLanding ? <div>Landing page</div> : <div>Home page</div> }</div>
            { shouldShowLanding ? <p>Landing</p> : <p>Home</p> }
            <button onClick={ toggle }>Váltás</button>

            <button onClick={ setPageName("Home") }>Home</button>
            <button onClick={ setPageName("About") }>About</button>
            <button onClick={ setPageName("Landing") }>Contact</button>
            <br />
            <div>{ pageName === "Home" && <div>Homepage component</div> }</div>
            <div>{ pageName === "About" && <div>About component</div> }</div>
            <div>{ pageName === "Landing" && <div>Landing component</div> }</div>
        </div>

    )
}
  
export default App;