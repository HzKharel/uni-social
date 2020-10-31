import React, {useEffect, useState} from "react";
import {emailRegex, passwordRegex} from "../Shared/Regex";
import {useStoreActions, useStoreState} from "easy-peasy";
import '../App.css';
import {useHistory} from "react-router";
import {LoginComponent} from "../Components/LoginComponent";
import {RegisterComponent} from "../Components/RegisterComponent";
import {AuthService} from "../Services/AuthService";

export const AuthPage = ({pageType}: { pageType: string }) => {
    const authService = AuthService.getInstance()
    const setUserData = useStoreActions((actions: any) => actions.setUserProfile)

    const [credentials, setCredentials] = useState<any>({email: 'hari@gmail.com', password: 'helloWorld1$'})
    const [profileData, setProfileData] = useState<any>({display_name: '', name: '', education: '', work: ''})
    const [otherState, setOtherState] = useState<any>({
        errors: {},
        loginDisabled: true,
        saveUser: false,
        confirmPassword: ''
    })

    useEffect(() => {
        const emailTest = emailRegex.test(credentials.email.toLowerCase());
        const passwordTest = passwordRegex.test(credentials.password)
        let errors: any= otherState.errors
        delete errors.apiErr
        let disabled = false;
        if (!emailTest && credentials.email.length > 0) {
            errors.invEmail = "The email you entered does not seem valid."
            disabled = true
        } else delete errors.invEmail

        if (credentials.password.length < 1) disabled = true

        if (!passwordTest && pageType === 'register' && credentials.password.length > 0) {
            errors.pwdLen = "Passwords must be longer than 8 characters, include a Symbol, a Number, an Upper and a Lower case character."
            disabled = true
        } else delete errors['pwdLen']
        console.log(credentials.password !== otherState.confirmPassword )
        if (credentials.password !== otherState.confirmPassword && pageType === 'register') {
            disabled = true
            errors.pwdMatch = "Passwords don't match."
        } else delete errors['pwdMatch']

        if (pageType === 'register') {

            for (let key in profileData) {
                if (profileData.hasOwnProperty(key) && profileData[key].length < 1) {
                    disabled = true
                }
            }
        }
        setOtherState({...otherState, loginDisabled: disabled, errors: errors})
    }, [credentials, profileData, otherState.confirmPassword])

    const handleChange = (event: any, isCred: any) => {
        if (event.target.id === 'confirmPassword') {
            console.log('got here')
            setOtherState({...otherState, confirmPassword: event.target.value})
        } else if (isCred) {
            setCredentials({...credentials, [event.target.id]: event.target.value})
        } else {
            setProfileData({...profileData, [event.target.id]: event.target.value})
        }
    }

    const submit = (isLogin: boolean, remember?: boolean) => {

        setOtherState({...otherState, loginDisabled: true})
        let errors = otherState.errors

        if(isLogin) {
            authService.loginUser(credentials).subscribe((res: any) => {
                if (res.code === 200) setUserData(res, remember)
                else {
                    errors.apiErr = res.message
                    setOtherState({...otherState, loginDisabled: false, errors: errors})
                }
            })
        }
        else {
            authService.registerUser({reg_data: credentials, profile_data: profileData})
                .subscribe((res: any) => {
                    if (res.code === 200) setUserData(res, remember)

                })
        }

    }

    const renderSwitch = () => {
        const loginProps = {credentials, handleChange, submit, otherState}
        const registerProps = {credentials, handleChange, submit, profileData, otherState}
        switch (pageType) {
            case 'login':
                return <LoginComponent props={loginProps}/>
            case 'register':
                return <RegisterComponent props={registerProps}/>
        }
    }

    return (
        <div>
            <div className='App center-page'>
                {renderSwitch()}
            </div>
        </div>

    )
}
