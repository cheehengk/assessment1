import React from 'react';

import AppHeader from "../Components/AppHeader";
import NameChanger from "../Components/NameChanger";
import ListUsers from "../Components/ListUsers";

const NameApp = () => {
    return (
        <div>
            <AppHeader />
            <NameChanger />
            <ListUsers />
        </div>
    )
}

export default NameApp;