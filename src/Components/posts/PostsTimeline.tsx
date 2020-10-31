import React from "react";
import '../../App.css';
import {makeStyles} from "@material-ui/core/styles";
import {PostComponent} from "./PostComponent";


const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        alignContent: 'center',
    },
    center: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
});

export const PostsTimeline = ({posts}: any) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.center}><PostComponent/></div>
            <div className={classes.center}><PostComponent/></div>
            <div className={classes.center}><PostComponent/></div>
        </div>
    )
}
