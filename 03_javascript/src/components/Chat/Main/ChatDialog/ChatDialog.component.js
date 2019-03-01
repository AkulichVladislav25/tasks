import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import './ChatDialog.styles.css';

class ChatDialog extends Component {
  render() {
    const {
      messages,
      value,
      handleChange,
      addMessage,
    } = this.props;

    return (
      () => (
        <React.Fragment>
          <ul className="chat__messages">
            {messages.map((message, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li className="chat__message" key={index}>
                {message.messages.map((element, index1) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <article className={element.isMine ? 'message  message--mine' : 'message  message'} key={index1}>
                    {element.message}
                    <time className="message__when">
                      {element.time}
                    </time>
                  </article>
                ))}
              </li>
            ))}
          </ul>
          <footer className="input">
            <input type="text" placeholder="Send Message" className="input__textarea" value={value} onChange={handleChange} />
            <button
              type="button"
              className="input__submit-button"
              onClick={addMessage}
            />
          </footer>
        </React.Fragment>
      )
    );
  }
}

ChatDialog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.shape({
      message: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
      isMine: PropTypes.bool.isRequired,
    })),
    messageFrom: PropTypes.string.isRequired,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ChatDialog;
