import {action, createStore, thunk} from "easy-peasy";
import {AuthService} from "./AuthService";

const authService = AuthService.getInstance()
export const store = createStore({
    user: {
        isLoggedIn: false,
        token: sessionStorage.getItem('token') || localStorage.getItem('token') || null,
        profile: {}
    },
    globalLock: true,
    setUserProfile: action((state: any, payload: any, rememberMe?: boolean) => {
        state.user.profile = payload;
        state.user.isLoggedIn = true

        if (payload.token) {
            state.user.token = payload.token;
            if (rememberMe !== undefined && rememberMe) {
                localStorage.setItem('token', payload.token)
            } else {
                sessionStorage.setItem('token', payload.token)
                localStorage.removeItem('token')
            }
        }

    }),
    setGlobalLock: action(((state:any, lock) => {
        state.globalLock = lock
    })),
    verifyUserStatus: authService.verifyUserStatus


})
