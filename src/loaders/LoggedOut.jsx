import useLoggedOut from './hooks/UseLoggedOut';

/** Pane that only shows its contents when the user is logged out. */
function LoggedOut({ children = null }) {
    const loggedOut = useLoggedOut();
    return loggedOut ? children : null;
}
export default LoggedOut;