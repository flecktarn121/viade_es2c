import React, {Fragment} from 'react';
import {NotLoggedInLayout, PrivateLayout, PublicLayout} from '@layouts';
import {HashRouter as Router, Redirect, Switch} from "react-router-dom";

import {
    CreateRoute,
    FormModelConverter,
    FormModelRenderer,
    GameList,
    GamePage,
    Login,
    PageNotFound,
    Profile,
    Register,
    RegistrationSuccess,
    Route,
    TextEditor,
    TimeLine,
    Welcome
} from './containers';
import FriendsList from './containers/FriendsList/FriendsList';

const privateRoutes = [
    {
        id: 'we' +
            'lcome',
        path: '/welcome',
        component: Welcome
    },
    {
        id: 'profile',
        path: '/profile',
        component: Profile
    },
    {
        id: 'tictactoe',
        path: '/tictactoe',
        component: GameList
    },
    {
        id: 'tictactoegame',
        path: '/tictactoe/:gameId',
        component: GamePage
    },
    {
        id: 'text-editor',
        path: '/text-editor',
        component: TextEditor
    },
    {
        id: 'formmodelconverter',
        path: '/formmodel/converter',
        component: FormModelConverter
    },
    {
        id: 'formmodelrenderer',
        path: '/formmodel/renderer',
        component: FormModelRenderer
    },
    {
        id: 'timeline',
        path: '/timeline',
        component: TimeLine
    },
    {
        id: 'route',
        path: '/route',
        component: Route
    },
    {
        id: 'friends',
        path : '/friends',
        component : FriendsList
    }
    ,
    {
        id: 'createroute',
        path: '/createroute',
        component: CreateRoute
    }
];

const Routes = () => (
    <Router>
        <Fragment>
            <Switch>
                <NotLoggedInLayout component={Login} path="/login" exact/>
                <NotLoggedInLayout component={Register} path="/register" exact/>
                <NotLoggedInLayout path="/register/success" component={RegistrationSuccess} exact/>
                <PublicLayout path="/404" component={PageNotFound} exact/>
                <Redirect from="/" to="/welcome" exact/>
                <PrivateLayout path="/" routes={privateRoutes}/>
                <Redirect to="/404"/>
            </Switch>
        </Fragment>
    </Router>
);

export default Routes;
