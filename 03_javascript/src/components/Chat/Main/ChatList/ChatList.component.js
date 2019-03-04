/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import './ChatList.styles.css';

class ChatList extends Component {
  render() {
    const { messages, onMessageClick } = this.props;
    return (
      <ul className="chat__list">
        {messages.map(message => (
          <li
            className="chat__list-item"
            key={message.id}
            onClick={onMessageClick(message.messageFrom)}
          >
            <article className="chat-preview">
              <h1 className="chat-preview__name">{message.messageFrom}</h1>
              <h2 className="chat-preview__last-message">{message.messages[message.messages.length - 1].message}</h2>
              <figure className="chat-preview__unread-count">
                {
                  message.messages.reduce((sum, current) => {
                    if (!current.isRead) {
                      return sum + 1;
                    } return sum;
                  }, 0)
                }
              </figure>
            </article>

          </li>
        ))}
      </ul>
    );
  }
}
ChatList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.shape({
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
      isMine: PropTypes.bool.isRequired,
    })),
    messageFrom: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onMessageClick: PropTypes.func.isRequired,
};

export default ChatList;
