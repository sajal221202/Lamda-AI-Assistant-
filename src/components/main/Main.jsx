/* eslint-disable react/no-danger-with-children */
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {
    
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)


  return (
    <div className="main">
      <div className="nav">
        <p>Lamda</p>
        <p className="advance">Test Lamda Advanced</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult?
        <>
<div className="greet">
          <p>
            <span>Ah, the Mastermind Returns!</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bodning activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>:
        <div className="result">
            <div className="result-title">
              <img className="user" src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img className="lamda" src={assets.lambda_icon} alt="" />
              {loading?
               <div className="loader">
                  <hr />
                  <hr />
                  <hr />
               </div>:
               <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              
            </div>
        </div>
        }
        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
          Lamda may provide incorrect information, including about individuals, so verify its responses. Your privacy & Lamda Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
