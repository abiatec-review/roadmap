import React from 'react';
import Search from "./Search/Search";
import Notifications from "./Notifications/Notifications";
import Instructions from "./Instructions/Instructions";
import User from "./User/User";

function Header() {
    return (
        <div className={'bg-white flex justify-end items-center p-2 pr-5 pl-5 fixed z-[999] w-screen'}>
            <Search />
            <Notifications />
            <Instructions />
            <User />
        </div>
    );
}

export default Header;