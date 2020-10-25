import React from "react";
import {AppBar, Button, createStyles, IconButton, Theme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const HeaderComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        UNI Social
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <RouterLink to="/home">Home</RouterLink>
                    <RouterLink to="/login">Login</RouterLink>
                    <RouterLink to="/register">Register</RouterLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
