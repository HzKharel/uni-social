import React from "react";
import '../../App.css';
import {makeStyles} from "@material-ui/core/styles";
import {
    Avatar, Box,
    CardContent,
    CardMedia,
    Divider, List, ListItem, ListItemAvatar, ListItemText, Paper,
    Typography
} from "@material-ui/core";

import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';



const useStyles = makeStyles({
    root: {
        width: 345,
        disableRipple: true
    },
    media: {
        height: 345,
        width: 345

    },
});

export const ProfileComponent = ({profile}: any) => {
    const classes = useStyles()

    return (
        <Box boxShadow={3}>
            <Paper className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="https://picsum.photos/500"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">My Profile</Typography>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText secondary="Name" primary={profile.name} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <SchoolIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText secondary="Education" primary={profile.education} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText secondary="Work" primary={profile.work} />
                        </ListItem>
                    </List>
                </CardContent>
            </Paper>
        </Box>
    )
}
