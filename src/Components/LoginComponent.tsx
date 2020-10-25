import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link as RouterLink} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import {AuthStyles} from "../Shared/AuthStyles";


export const LoginComponent = ({props}: {props: any}) => {

    const classes: any = AuthStyles();
    const handleChange = (event: any) => props.handleChange(event, true)
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    return (
        <div className="card">
            <h1 className='card-title'>UNI Social</h1>
            <div className="card-content">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.child}
                               id="email"
                               label="Email"
                               value={props.credentials.email}
                               onChange={handleChange}
                               variant="outlined"/>
                    <TextField className={classes.textField}
                               id="password"
                               type="password"
                               value={props.credentials.password}
                               onChange={handleChange}
                               label="Password"
                               variant="outlined"/>
                </form>
                <div className={classes.additionalActions}>
                    <FormControlLabel control={<Checkbox name="checkedA" value={rememberMe} onChange={()=> setRememberMe(!rememberMe)}/>} label="Keep Me Logged In"/>
                    <Link component={RouterLink} to='/password-reset'>Forgot Password</Link>
                </div>
            </div>
            <div className="card-actions">
                <div className={classes.actions}>
                    {Object.entries(props.otherState.errors).map((e: any) =>
                        <Alert key={e[0]} className={classes.alert} severity="error">{e[1]}</Alert>
                    )}
                    <Button className={classes.loginButton}
                            variant="contained"
                            disabled={props.otherState.loginDisabled}
                            onClick={() => {
                                props.submit(true, rememberMe)
                            }}
                            color="primary">
                        Login
                    </Button>
                    <Link component={RouterLink} to='/register'>Register</Link>
                </div>

            </div>
        </div>
    )
}
