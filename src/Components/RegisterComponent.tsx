import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import {Link as RouterLink} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {AuthStyles} from "../Shared/AuthStyles";
import Alert from "@material-ui/lab/Alert";

export const RegisterComponent = ({props}: {props: any}) => {
    const classes = AuthStyles();

    const handleCredentials = (event: any) => {
        props.handleChange(event, true)
    }
    const handleData = (event: any) => {
        props.handleChange(event, false)
    }

    return (
        <div className="card">
            <h1 className='card-title'>UNI Social</h1>
            <div className="card-content">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.child}
                               id="email"
                               value={props.credentials.email}
                               onChange={handleCredentials}
                               label="Email"
                               variant="outlined"/>
                    <TextField className={classes.child}
                               id="display_name"
                               label="Display Name"
                               value={props.profileData.display_name}
                               onChange={handleData}
                               variant="outlined"/>
                    <div className={classes.additionalActions}>
                        <TextField className={classes.textFieldSpaced}
                                   id="password"
                                   label="Password"
                                   value={props.credentials.password}
                                   onChange={handleCredentials}
                                   variant="outlined"/>
                        <TextField className={classes.textFieldSpaced}
                                   id="confirmPassword"
                                   onChange={handleCredentials}
                                   value={props.otherState.confirmPassword}
                                   label="Confirm Password"
                                   variant="outlined"/>
                    </div>
                    <Divider variant="fullWidth" className={classes.spacer}/>
                    <TextField className={classes.child}
                               id="name"
                               label="Full Name"
                               value={props.profileData.name}
                               onChange={handleData}
                               variant="outlined"/>
                    <TextField className={classes.child}
                               id="education"
                               label="Education"
                               value={props.profileData.education}
                               onChange={handleData}
                               variant="outlined"/>
                    <TextField className={classes.child}
                               id="work"
                               value={props.profileData.work}
                               onChange={handleData}
                               label="Work"
                               variant="outlined"/>
                </form>

            </div>
            <div className="card-actions">
                <div className={classes.actions}>
                    {Object.entries(props.otherState.errors).map((e: any) =>
                        <Alert key={e[0]} className={classes.alert} severity="error">{e[1]}</Alert>
                    )}
                    <Button className={classes.loginButton}
                            variant="contained"
                            onClick={props.submit}
                            disabled={props.otherState.loginDisabled}
                            color="primary">
                        Register
                    </Button>
                    <Link component={RouterLink} to='/login'>Login</Link>
                </div>

            </div>
        </div>
    )
}
