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
      id: 500,
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
        value: '',
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
      const {
        conversationWith,
        value,
        id,
      } = this.state;
      const newMessage = {
        id: messages.filter(e => e.messageFrom === conversationWith).id,
        messageFrom: conversationWith,
        messages: [
          {
            id: id + 1,
            message: value,
            time: new Date().getMinutes() > 9 ? `${new Date().getHours()}:${new Date().getMinutes()}` : `${new Date().getHours()}:0${new Date().getMinutes()}`,
            isRead: true,
            isMine: true,
          },
        ],
      };
      this.setState({
        messages: 
          if (this.state.messages.messages.messageFrom === conversationWith) {
            return { ...message, messages: [...message.messages, newMessage] };
          }
        ,
      });
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
                messages={messages.filter(e => e.messageFrom !== conversationWith)}
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
