import {useState} from "react";
import {
    Divider,
    IconButton,
    MenuItem, Switch,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import './style.scss'

const MessagesSetting = ({closeSettings}) => {

    const [state, setState] = useState({
        messageSound: true,
        popup: false,
        active: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div className={'messages-settings'}>
            <div className='header'>
                <IconButton className={'header-btn'} onClick={closeSettings}>
                    <ArrowBackIosIcon />
                </IconButton>
                <div>
                    <div className={'header-name'}>Settings</div>
                    <div className={'header-desc'}>Select your preferences</div>
                </div>
            </div>
            <MenuItem disableRipple={true} className={'settings-item'}>
                <VolumeUpOutlinedIcon className={'icon'}/>
                <span className={'msg'}>Message sound</span>
                <Switch
                    value={state.messageSound}
                    checked={state.messageSound}
                    name="messageSound"
                    onChange={handleChange}
                    size="small"
                    color="secondary"
                />
            </MenuItem>
            <MenuItem disableRipple={true} className={'settings-item'}>
                <NotificationImportantOutlinedIcon className={'icon'}/>
                <div>
                    <p className={'msg'}>Popup new messages</p>
                    <p className={'msg-sec'}>Auto open new messages</p>
                </div>
                <Switch
                    value={state.popup}
                    checked={state.popup}
                    name="popup"
                    onChange={handleChange}
                    size="small"
                    color="secondary"
                />
            </MenuItem>
            <MenuItem disableRipple={true} className={'settings-item'}>
                <PersonOutlineOutlinedIcon className={'icon'}/>
                <span className={'msg'}>Turn-off active status</span>
                <Switch
                    value={state.active}
                    checked={state.active}
                    name="active"
                    onChange={handleChange}
                    size="small"
                    color="secondary"
                />
            </MenuItem>
            <Divider />
            <MenuItem disableRipple={true} className={'settings-item'}>
                <ChatBubbleOutlineOutlinedIcon className={'icon'}/>
                <span className={'msg'}>Message requests</span>
            </MenuItem>
            <MenuItem className={'settings-item'}>
                <SendOutlinedIcon className={'icon'}/>
                <span className={'msg'}>Message delivery setting</span>
            </MenuItem>
        </div>
    )
}

export default MessagesSetting