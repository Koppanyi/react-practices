import  React from  "react";

const handleClickEvent = (event) => {
    document.getElementById("text").innerHTML = "You clicked the button!";
};

function button(props) {
    const {text, text2} = props;
    console.log(text);
    console.log(text2);
    return (
        <div>
            <button onClick={handleClickEvent}>{props.text}</button>
            <div id="text"></div>
        </div>
    )
};

export default button;