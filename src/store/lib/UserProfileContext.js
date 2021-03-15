import React from 'react'
import { createContext, useState } from 'react';

export const UserProfileContext = createContext();

const UserProfileContextProvider = ({children}) => {
    const userProfileState = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        setUserProfileContext: info => setUserProfile(prevState => {
            const key = Object.keys(info)
            return {
                ...prevState,
                [key]: Object.values(info)[0] // Why co dau ngoac vuong [Object.keys(info)] -> vi muon su dung mot bien o vi tri nay thi phai co dau ngoac, neu ko no se hieu ten bien la ten thuoc tinh luon.
            }})
    }
    const [userProfile, setUserProfile] = useState(userProfileState);
    return (<UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider
