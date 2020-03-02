import useLoggedIn from './hooks/UseLoggedIn';

/** Pane that only shows its contents when the user is logged in. */
function LoggedIn({ children = null }) {
    const loggedIn = useLoggedIn();
    return loggedIn ? children : null;
}
export default  LoggedIn;