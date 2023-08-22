import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <h1> {props.pokename} #{props.pokenumber}</h1>
            <img className="poke-pic" src={props.pic}></img>
            <div className="card-infos">
                <p>Info 1</p>
                <p>Info 2</p>
            </div>
            
        </div>
    )
}

export default Card;