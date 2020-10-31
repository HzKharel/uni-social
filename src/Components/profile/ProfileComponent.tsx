import React from "react";
import '../../App.css';
import {makeStyles} from "@material-ui/core/styles";
import {
    Avatar, Box, Button, Card,
    CardContent,
    CardMedia,
    Divider, List, ListItem, ListItemAvatar, ListItemText, Paper,
    Typography
} from "@material-ui/core";

import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    root: {
        flex: 1,
        height: '100%',
        width: '100%',
        disableRipple: true,
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        paddingBottom: '100%',
        width: '100%'
    },
    userData: {
        flex: 1,
        overflowY: 'auto'
    }

});

export const ProfileComponent = ({profile}: any) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Box boxShadow={3} className={classes.root}>
                <Paper className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/1000"/>
                    <CardContent className={classes.userData}>
                        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", height: '50'}}>
                            <Typography gutterBottom variant="h4" style={{flex: 1}}>{profile.name}</Typography>
                            <Button variant="outlined" color="primary" style={{ height: '100%'}}>Follow</Button>
                            {/*<Button variant="outlined" color="secondary" style={{ height: '100%'}}>Unfollow</Button>*/}

                        </div>
                        <Typography  variant="h6" component="h3"><b>Followers: {profile.followers.length}</b></Typography>
                        <Typography  variant="h6" component="h3"><b>Following: {profile.following.length}</b></Typography>

                        <Divider/>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SchoolIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary="Education" primary={profile.education}/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary="Work" primary={profile.work}/>
                            </ListItem>
                        </List>
                        <Divider/>
                        <Typography  variant="body1" component="p">
                            {profile.bio || "Thi is a a test bio"}
                        </Typography>
                    </CardContent>
                </Paper>
            </Box>
        </div>
    )
}
