import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import {yellow} from "@mui/material/colors";
export const notifications = [
    {
        key: 1,
        name: 'Stella Johnson',
        action: ' has recently posted an album',
        icon: <RateReviewOutlinedIcon color={'secondary'}/>,
        time: '02:47 PM'
    },
    {
        key: 2,
        name: 'John Doe',
        action: '  has shared Martin Guptil post',
        icon: <ShareOutlinedIcon color={'primary'} />,
        time: '03:01 PM'
    },
    {
        key: 3,
        name: 'Garry Sobars',
        action: ' has sent you a group invitation for Global Health',
        icon: <MarkEmailUnreadOutlinedIcon color={'success'} />,
        time: '01:25 PM'
    },
    {
        key: 4,
        name: 'Sara John',
        action: ' has birthday today.',
        icon: <CakeOutlinedIcon sx={{ color: yellow[500] }} />,
        time: '03:01 PM'
    },
]