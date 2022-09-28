import './style.scss'
import {Avatar} from "@mui/material";

const AvatarTip = () => {
    return (
        <div className={'avatartip'} >
            <div className={'img'}>
                <Avatar className={'avatar'} sx={{ width: 60, height: 60 }} src={'https://jumbo.g-axon.work/images/avatar/avatar7.jpg'}></Avatar>
            </div>
            <div className={'text'}>
                <div>Chris Morris</div>
                <div>Director</div>
            </div>

        </div>
    )
}

export default AvatarTip