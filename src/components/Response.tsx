import React from 'react';
import {IMessage, /*IMessageInfo*/} from '../models'

interface MessageProps {
  messageInfo: IMessage;
}


export default function Response({messageInfo}: MessageProps) {
  return (
        <li className="clearfix">
        <div className="message-data">
          <span className="message-data-name"><i className="fa fa-circle online"></i>{messageInfo.from.name}</span>
          <span className="message-data-time">{messageInfo.time}</span>
        </div>
        <div className="message my-message">
          {messageInfo.text}
        </div>
      </li>
  )
}
