import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import io from 'socket.io-client';
import Message from "./message";
import './Input.css'
import Header from "./header";
const Input = () => {
  const apiUrl = 'https://mingle-chat-server.islam2511.repl.co/messages'
  const [inputValue, setInputValue] = useState('')
  const [Msgs, setMsgs] = useState([])
  const [test, setTest] = useState(false)
  const scrollRef = useRef(null);
  const inputRef = useRef(null)
  
  const insertMessage = () => {
    if(inputValue === '') return 
    const userID = Cookies.get("userId");
    const payload = { body: inputValue, userId: userID }
    axios.post(apiUrl, payload)
    setInputValue('')
    inputRef.current.focus()
  }

  const compareID = (msgID) => {
    if (msgID === Cookies.get("userId")) {
      return 'usermsg'
    } else {
      return 'othersmsg'
    }
  }
 

  useEffect(() => {
    if (test) return
    const getMsgs = async () => {
      const data = await axios.get(apiUrl)
      const messages = data.data
      setMsgs(messages)
      console.log(Msgs)
      if (Msgs.length >= 1) setTest(true)


    }
    getMsgs()
  }, [Msgs])

  useEffect(() => {
    // Create the Socket.IO client instance
    const socket = io('https://mingle-chat-server.islam2511.repl.co/', { transports: ['websocket'] });

    // Handle connection event
    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server');
      socket.on('newMessage', (data) => {
        setMsgs((prevMessages) => [...prevMessages, data]);

      });
    });

    // Handle disconnection event
    socket.on('disconnect', () => {
      console.log('Disconnected from the Socket.IO server');
    });

    

    // Clean up the Socket.IO connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  
    
  }, [Msgs]);

  return (
    <div className="container">
      <Header />
      <div className="chat-container">
        
        {Msgs.map((message, index) => (
          <Message key={index} body={message.body} classnam={compareID(message.userId)} />
        ))}
        <div ref={scrollRef} ></div>
      </div>
      <div id="a">
        <textarea 
          id="input" placeholder="ماذا تريد ان تقول...."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          ref={inputRef}

        />

        <button onClick={insertMessage} id="snd">
          <img alt="" src={require('./sendicon.png')} />
        </button>

      </div>
    </div>
  )
}

export default Input