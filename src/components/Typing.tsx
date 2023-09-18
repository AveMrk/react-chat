import React from 'react'
import {IMessage, /*IMessageInfo*/} from '../models'

interface MessageProps {
  messageInfo: IMessage;
}

export default function Typing({messageInfo}: MessageProps) {
  return (
        <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{messageInfo.time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{messageInfo.from.name}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
          {messageInfo.text}
        </div>
      </li>
  )
}
