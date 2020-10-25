import React from "react";
import '../App.css';
import {ProfileComponent} from "../Components/profile/ProfileComponent";
import {State, useStoreState} from "easy-peasy";

export const ProfilePage = () => {
    const userStore = useStoreState((state: State<any>) => state.user.profile)

    return (
        <div className='App center-page'>
            <ProfileComponent profile={userStore} />
        </div>
    )
}
