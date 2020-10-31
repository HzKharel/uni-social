import React, {useState} from "react";
import '../../App.css';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, CardActionArea, Divider, Modal, Paper, TextField, Typography} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import ImageUploader from 'react-images-upload';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'white'
    },
    root: {
        flex: 1,
        height: '100%',
        width: '95%',
        disableRipple: true,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'white'
    },
    paper: {
        height: 'available',
        width: '95%',
        padding: 10,
        overflowX: 'hidden',
        backgroundColor: 'white'
    },
    form: {
        marginTop: 10,
        width: '100%'
    },
    formItem: {
        marginBottom: 10,
        width: '100%'
    },
    pictures: {
        height: 'available',
        overflowY: 'auto',
        overflowX: 'hidden',
    }

});


export const CreatePostComponent = () => {
    const classes = useStyles()
    const [newPost, setNewPost] = useState<any>({title: '', content: '', media: '', tags: [], pictures: []})

    const onDrop = (pics: any) => {
        setNewPost({...newPost, pictures: pics})
    }

    return (
        <div className={classes.container}>
            <Box boxShadow={3} className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h2">
                        New Post
                    </Typography>
                    <Divider/>
                    <div className={classes.form}>
                        <TextField className={classes.formItem} id="title" label="Title" variant="outlined"/>
                        <TextField
                            id="content"
                            label="Content"
                            className={classes.formItem}
                            multiline
                            rows={4}
                            rowsMax={8}
                            variant="outlined"
                        />
                        <Typography>Tags</Typography>
                        <Divider style={{marginBottom: 10}}/>
                        <ChipInput
                            defaultValue={['foo', 'bar']}
                            variant="outlined"
                            className={classes.formItem}
                        />
                        <div className={classes.pictures}>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={onDrop}
                                withPreview={true}
                                singleImage={false}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                        </div>
                    </div>
                    <Button variant="outlined" color="primary" className={classes.formItem}
                            onClick={() => console.log(newPost.pictures)}>Add Media</Button>
                </Paper>
            </Box>

        </div>
    )
}
