import React, { PureComponent as Component } from 'react';
import PropTypes from 'prop-types';
import messageArray from './messages';
import Header from './Main/Header';
import ChatDialog from './Main/ChatDialog';
import ChatList from './Main/ChatList';


class Chat extends Component {
    state = {
      messages: messageArray,
      isDialog: false,
      unread: null,
      conversationWith: null,
      value: '',
    }

    componentDidMount() {
      this.setState(prevState => ({
        unread:
          prevState.messages.map(message => message.messages.reduce((sum, current) => {
            if (!current.isRead) {
              return sum + 1;
            }
            return sum;
          }, 0)).reduce((sum, current) => sum + current, 0),


      }));
    }

    handleChange = (event) => {
      this.setState({ value: event.target.value });
    }

    onMessageClick = messageFrom => () => {
      this.setState({
        conversationWith: messageFrom,
        isDialog: true,
      });
    }

    onBackButtonClick = () => {
      this.setState({
        isDialog: false,
        conversationWith: null,
      });
    }

    addMessage = () => {
      const { conversationWith, value, messages } = this.state;
      const newMessage = {
        id: messages.filter(message => message.messageFrom === conversationWith).id,
        messageFrom: conversationWith,
        messages: [
          {
            id: Math.random(10, 100),
            message: value,
            time: new Date().getMinutes() > 9 ? `${new Date().getHours()}:${new Date().getMinutes()}` : `${new Date().getHours()}:0${new Date().getMinutes()}`,
            isRead: true,
            isMine: true,
          },
        ],
      };
      this.setState({
        messages: [
          ...messages.filter(e => e.messageFrom === conversationWith),
          newMessage,
        ],
        value: '',
      });
    }

    newMethod() {
      return this;
    }

    render() {
      const {
        isDialog,
        messages,
        unread,
        conversationWith,
        value,
      } = this.state;
      const { name } = this.props;


      return (
        <React.Fragment>
          <Header
            isDialog={isDialog}
            name={name}
            unread={unread}
            onBackButtonClick={this.onBackButtonClick}
            conversationWith={conversationWith}
          />
          {isDialog
            ? (
              <ChatDialog
                messages={messages.filter(e => !e.messageFrom.localeCompare(conversationWith))}
                value={value}
                handleChange={this.handleChange}
                addMessage={this.addMessage}
              />
            )
            : (
              <ChatList
                messages={messages}
                onMessageClick={this.onMessageClick}
              />
            )}
        </React.Fragment>
      );
    }
}
Chat.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Chat;
