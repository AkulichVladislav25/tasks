import React, { PureComponent as Component } from 'react';
import './ChatList.styles.css';
class ChatList extends Component {
   
    render() {
        const {messageFrom,lastMessage,unread}=this.props;
        return (  
        <li className="chat__list-item">
        <article className="chat-preview">
            <h1 className="chat-preview__name">messageFrom {messageFrom}</h1>
            <h2 className="chat-preview__last-message">lastMessage {lastMessage}</h2>
            <figure class="chat-preview__unread-count">unread {unread}</figure>
        </article>
        </li>
        );
    }
}