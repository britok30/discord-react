import React, { useState } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from '../Message/Message';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { selectUser } from '../../features/userSlice';

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('');

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input} placeholder={`Message #TESTCHANNEL`} onChange={(e) => setInput(e.target.value)} />
                    <button className="chat__inputButton" type="submit">
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Chat;
