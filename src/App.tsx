import React from 'react';
import './App.css';
import MessageHistory from './components/MessageHistory';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory/>
        </div>
      </div>
    </div>
  );
}

export default App;
