import {createStyles, makeStyles} from "@material-ui/core/styles";

export const AuthStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        child : {
            marginTop: '8px',
            marginBottom: '8px'
        },
        additionalActions: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 0,
            userSelect: 'none'
        },
        loginButton: {
            width: '100%',
            height: '55px',
        },
        actions: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'

        },

        textFieldSpaced: {
            width: '49%',
            marginTop: '8px',
            marginBottom: '8px'
        },
        spacer: {
            marginBottom: '10px'
        },
        alert: {
            width: '95%',
            marginBottom: '10px'
        }
    }))
