import {useState} from "react";
import {
    Avatar,
    Button,
    Divider,
    IconButton,
    Menu, MenuItem,
} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './style.scss'

const Account = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if(e.currentTarget.id !== 'account-menu') {
            setAnchorEl(null);
        }
    };
    return (
        <div  >
            <Avatar
                size={'large'}
                onClick={handleClick}
                className={'message-icon'}
                src={'https://jumbo.g-axon.work/images/avatar/avatar3.jpg'}
            />

            <Menu
                className={'account-menu'}
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className={'menu-list'}>
                    <Avatar
                        size={'large'}
                        className={'acc-icon'}
                        src={'https://jumbo.g-axon.work/images/avatar/avatar3.jpg'}
                    />
                    <span className={'acc-name'}>
                           Harmayni Croft
                       </span>
                    <span className={'acc-mail'}>
                           harmaynicroft@example.com
                       </span>
                </div>
                <Divider />
                <MenuItem disableRipple={true} className={'account-item'}>
                    <PermIdentityOutlinedIcon className={'icon'}/>
                    <span className={'msg'}>Profile</span>
                </MenuItem>
                <MenuItem disableRipple={true} className={'account-item'}>
                    <CreateOutlinedIcon className={'icon'}/>
                    <span className={'msg'}>Edit profile</span>
                </MenuItem>
                <MenuItem disableRipple={true} className={'account-item'}>
                    <RepeatOutlinedIcon className={'icon'}/>
                    <span className={'msg'}>Switch User</span>
                </MenuItem>
                <MenuItem disableRipple={true} className={'account-item'}>
                    <LogoutOutlinedIcon className={'icon'}/>
                    <span className={'msg'}>Logout</span>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Account