import {useState} from "react";
import {
    IconButton,
    Menu,
} from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import MessagesMenu from "./MessagesMenu";
import MessagesSetting from "./MessagesSetting";

import './style.scss'

const Messages = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isSettings, setIsSettings] = useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if(e.currentTarget.id !== 'account-menu') {
            setAnchorEl(null);
        }
    };
    const openSettings = () => {
        setIsSettings(true)
    }
    const closeSettings = () => {
        setIsSettings(false)
    }
    return (
        <div className={'message-menu'} >

            <IconButton
                size={'large'}
                onClick={handleClick}
                className={'message-icon'}
            >
                <ChatBubbleOutlineIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {isSettings ? <MessagesSetting closeSettings={closeSettings} /> : <MessagesMenu openSettings={openSettings}/>}
            </Menu>
        </div>
    )
}

export default Messages