import Messages from "./Messages";
import SearchInput from "../SearchInput";

import './style.scss'
import Notifications from "./Notifications";
import Account from "./Account";

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