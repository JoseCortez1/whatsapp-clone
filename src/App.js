import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'


function App() {
  const [messages, setMessages] = useState([])
  useEffect(()=>{
    axios.get('/message/async')
    .then((response)=>{
      console.log(response.data)
      setMessages(response.data)
    })
  },[])

  useEffect(() => {
    //one
    const pusher = new Pusher('d7bf13f4cebe2d150ec6', {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      console.log(messages)
      setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages]);
  return (
    <div className="app">
      <div className="app__body"> 
        <Sidebar/>
        <Chat messages={messages}/>
      </div>

    </div>
  );
}

export default App;
