import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    IconButton, Theme, Typography
} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {makeStyles} from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '40%',
            height: 'auto',
            marginBottom: 15,
            marginTop: 5,
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: ' 0.3s'
        },
        media: {
            height: 0,
            paddingTop: '100%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);
export const PostComponent = ({post}: any) => {

    const classes = useStyles()

    const items = [
        "https://picsum.photos/500",
        "https://picsum.photos/550",
        "https://picsum.photos/600"
    ]

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            {/*<CardMedia*/}
            {/*    className={classes.media}*/}
            {/*    image="https://picsum.photos/500"*/}
            {/*/>*/}
            <Carousel animation='slide' timeout={100} autoPlay={false}>
                {
                   items.map((item: any, i: any) => <CardMedia className={classes.media} key={i} image={item} />)
                }
            </Carousel>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
