import React from "react";
import '../App.css';
import {ProfileComponent} from "../Components/profile/ProfileComponent";
import {State, useStoreState} from "easy-peasy";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {List} from "@material-ui/core";
import {PostComponent} from "../Components/posts/PostComponent";
import {PostsTimeline} from "../Components/posts/PostsTimeline";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: 'calc(100vh - 64px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            backgroundColor: 'whiteSmoke'
        },
        profile: {
            height: '100%',
            flex: 1,
            padding: 5
        },
        posts: {
            flex: 4,
            height: '100%',
            padding: 5,
        }
    }))

export const ProfilePage = () => {
    const classes = useStyles()
    const userStore = useStoreState((state: State<any>) => state.user)
    console.log(userStore)

    return (
        <div className={classes.root}>
            <div id='profile' className={classes.profile}>
                <ProfileComponent profile={userStore.profile}/>
            </div>
            <div className={classes.posts}>
                <PostsTimeline />
            </div>
        </div>
    )
}
