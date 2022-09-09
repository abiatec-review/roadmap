import {
    Button, Divider,
    IconButton, MenuItem,
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchInput from "../../../SearchInput";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {messages} from "./constants.js";

import './style.scss'

const MessagesMenu = ({openSettings}) => {

    const Message = ({info}) => {
        return (
            <MenuItem disableRipple={true} className={'mess'}>
                <CircleIcon className={'mess-icon'} sx={{ fontSize: 40 }} color={'disabled'}/>
                <div>
                    <div className={'mess-name'}>{info.name}</div>
                    <div className={'mess-info'}>{info.message}</div>
                </div>
                <IconButton>
                    <MoreHorizIcon/>
                </IconButton>
            </MenuItem>
        )
    }

    return (
        <div className={'messages-menu'}>
            <div className={'menu-list'}>
                <div>
                    <div className={'header'}>Messages</div>
                    <div className={'afterheader'}>6 new messages</div>
                </div>
                <div>
                    <IconButton>
                        <CreateIcon/>
                    </IconButton>
                    <IconButton>
                        <StarBorderIcon/>
                    </IconButton>
                    <IconButton onClick={openSettings}>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
            </div>
            <div className={'search-block'}>
                <SearchInput placeholder={'Search messages...'} />
            </div>
            {messages.map((el) => {
                return (
                    <Message info={el} key={el.key}/>
                )
            })}
            <Divider />
            <div className={'btn-block'}>
                <Button color="secondary">VIew All <ArrowForwardIcon sx={{ fontSize: 16 }}/></Button>
            </div>
        </div>
    )
}

export default MessagesMenu