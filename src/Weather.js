import React, { Component } from 'react';

const Weather=(props)=>{
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.city},{props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h1 className="py-2">{props.celsius}&deg;</h1>
                {minmaxTemp(props.temp_min,props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    )
};

function minmaxTemp(min,max){
    return(
        <h3>
            <p>Temperature Maximum</p>
            <span className="py-4">{min}&deg;</span>
            <br></br>
            <p>Temperature Minimum</p>
            <span className="py-4">{max}&deg;</span>
        </h3>
    )
}

export default Weather;