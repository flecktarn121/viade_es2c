import React from 'react';
import useLoggedIn from "./UseLoggedIn";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function AuthButton({ login, logout, ...props }) {
    return useLoggedIn() ?
     <LogoutButton {...props}>{logout}</LogoutButton> :
     <LoginButton {...props}>{login}</LoginButton>;
}

export default AuthButton;
