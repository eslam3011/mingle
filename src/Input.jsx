import React from "react";
import Message from "./message";
import './Input.css'
const Input = () => {

    return (
        <>
        <div className="chat-container"><Message classnam='usermsg' body="hi hi df gdf g " /></div>
        <div id="a">
            <input id="input" placeholder="ماذا تريد ان تقول...." />

                <button id="snd"><img src={require('./sendicon.png')} /></button>

        </div>
        </>
    )
}

export default Input