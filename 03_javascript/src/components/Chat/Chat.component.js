import React, { PureComponent as Component } from 'react';
import messages from './messages';
import Header from './Main/Header';
//import ChatDialog from './Main/ChatDialog';
import ChatList from './Main/ChatList';

class Chat extends Component {
    
    state = {
        messages: messages,
        isDialog: false,
        unread: null,
        messageFrom:messages.messageFrom,
        lastMessage:messages.message, 

    }
    componentDidMount(){
        this.setState({
            unread:             
            this.state.messages.reduce((sum, current)=> {
                if (!current.isRead) {                   
                    return sum+1;
                } else return sum;
            }, 0),
            lastMessage: this.setState({lastMessage:  this.state.messages.message}),
            messageFrom:this.setState({messageFrom:this.state.messages.messageFrom}),
            
        });
    }

    render() {
        const { isDialog, messages, unread,lastMessage,messageFrom } = this.state;
        const { name } = this.props;

        return ( 
            <React.Fragment >
            <Header isDialog = { isDialog } name = { name } unread={ unread }/> 
          {/* isDialog ? < ChatDialog messages = { messages }/> : <ChatList messages={messages}/ > */}
                    <ChatList messageFrom ={ messageFrom } lastMessage={ lastMessage } unread ={ unread }/>
            </React.Fragment >
        );
    }
};

export default Chat;