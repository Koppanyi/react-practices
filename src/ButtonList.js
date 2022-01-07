import  React,  { Component }  from  "react";
import Button from "./button";



class ButtonList extends React.Component {

    render(){
        return (

           
             [...Array(10)].map((_,i) => <Button key={i} name={'button '+i}/>)  
            
        )
    }
}

export default ButtonList;