import Messages from "./Messages";
import SearchInput from "../SearchInput";
import Notifications from "./Notifications";
import Account from "./Account";

import './style.scss'

const UserHeader = () => {
    return (
        <div className={'user-header'} >
            <div className={'search-block'}>
                <SearchInput placeholder={'Search anything'}/>
            </div>

            <div className={'menus'}>
                <Messages/>
                <Notifications />
                <Account />
            </div>
        </div>
    )
}

export default UserHeader