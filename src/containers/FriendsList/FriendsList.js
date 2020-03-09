import React from 'react';

const $rdf = require('rdflib');
const auth = require('solid-auth-client');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

//var person = null;
var person = 'https://ruben.verborgh.org/profile/#me';

/**
 * Container component to show the user´s friends
 */
function FriendsList() {
    trackSession();
    var friends = loadFriends(person);

    return <h1>Lista de amigos</h1>
}

/**
 * This function returns the friends list for a specified user
 */
async function loadFriends(p) {
    const store = $rdf.graph();
    const fetcher = new $rdf.Fetcher(store);

    await fetcher.load(person);

    const friends = store.each($rdf.sym(p), FOAF('knows'));

    friends.forEach(friend => {
        console.log(friend);
    });

    return friends;
}
/**
 * 
 */
function trackSession() {
    auth.trackSession(session => {
        if (session) {
            //person = session.webId;
            console.log('The user : ' + person + 'is logged in');
        }
        else {
            console.log('The user is not logged in');
        }
    });
}

export default FriendsList;