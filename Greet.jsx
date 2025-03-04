import React from "react";

const Greet = () => {
    let currentHour = new Date().getHours();
    // let currentHour = 14;
    let isMorning = currentHour < 12;
    // let greetMsg;

    // if(isMorning){
    //    greetMsg =<h1>Good Morning</h1>
    // }else{
    //     greetMsg =<h1>Good Afternoon </h1>
    // }

    // return <>{greetMsg}</>

    return <>{isMorning ? <h1>Good Morning</h1> : <h1>Good Afternoon</h1>}</>
};
export default Greet;