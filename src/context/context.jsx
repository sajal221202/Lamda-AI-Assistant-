/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../config/lamda";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");

  const [recentPrompt, setrecentPrompt] = useState("");

  const [prevPrompt, setprevPrompt] = useState([]);

  const [showResult, setshowResult] = useState(false);

  const [loading, setLaoding] = useState(false);

  const [resultData, setresultData] = useState("");
  
  //logic for typing effect
  const delayyPara = (index,nextWord) => {
    setTimeout(function(){
        setresultData(prev=>prev+nextWord);
    },75*index)
  };

  //new chat button
  const newChat=()=>{
    setLaoding(false)
    setshowResult(false)
  }

  const onSent = async (prompt) => {
    setresultData("");
    setLaoding(true);
    setshowResult(true);
    let Response;
    if(prompt!== undefined){
           Response=await runChat(prompt);
           setrecentPrompt(prompt);
    }
    else{
        setprevPrompt(prev=>[...prev,input]); 
        setrecentPrompt(input);
        Response=await runChat(input);
    }

    let responseArray = Response.split("**");
    let newResponse="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>"+responseArray[i]+"</b>";
      }
    }
    let newResponse2=newResponse.split("*").join("</br>")

    let newResponseArray=newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++){
         const nextword=newResponseArray[i];
         delayyPara(i,nextword+" ");
    }
    setLaoding(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
