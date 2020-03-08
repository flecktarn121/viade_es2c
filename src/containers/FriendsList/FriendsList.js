import React from 'react';

const $rdf = require('rdflib');
const auth = require('solid-auth-client');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const person = null;

auth.trackSession(session =>{
    person = session.webId;
});

async function loadProfile(){
    const store = $rdf.graph();
    const fetcher = new $rdf.Fetcher(store);
}

/**
 * Container component to show the user´s friends
 */
 function FriendsList(){
    return <h1>Lista de amigos</h1>
}

export default FriendsList;