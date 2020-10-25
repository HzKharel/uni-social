import {thunk} from "easy-peasy";
import ky from 'ky'
import {from} from "rxjs";

export const Endpoint = "http://localhost:5000/"


export class AuthService {
    private static _instance: AuthService;
    private api: any;

    private constructor() {
    }

    public static getInstance(): AuthService {
        if (!AuthService._instance) {
            AuthService._instance = new AuthService();
        }

        return AuthService._instance;
    }

    getToken = () => sessionStorage.getItem('token') || localStorage.getItem('token') || null

    loginUser = (payload: any) => from(ky.post(`${Endpoint}auth/login`, {json: payload}).json())
    registerUser = (payload: any) => from(ky.post(`${Endpoint}auth/register`, {json: payload}).json())

    verifyUserStatus = thunk(async (actions: any, token: string) => {
        const tokenData: any = await ky.get(`${Endpoint}auth/verify-token`, {headers: {'token': token}}).json()
        if (tokenData.verified) {
            const headers = {'user_id': tokenData.message.user_id, 'token': token}
            const profile: any = await ky.get(`${Endpoint}user/profile`, {headers}).json()

            if (profile.code === 200) {
                console.log(profile)
                actions.setUserProfile(profile.data, true)
            }
            actions.setGlobalLock(false)


            //reate api instance here ky.extend({hooks: {beforeRequest: [request => request.headers.set('token', getToken() || '')]}})
        }
    })


}


