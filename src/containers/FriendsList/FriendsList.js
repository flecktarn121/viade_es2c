import React,{ useState } from 'react';
import { render } from 'react-testing-library';
import { toUnicode } from 'punycode';

import {Header, FriendListWrapper, FriendListContainer } from './FriendList.style';

//authentication
const auth = require('solid-auth-client');
//rdf 
const $rdf = require('rdflib');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
const store = $rdf.graph();
const fetcher = new $rdf.Fetcher(store);

//var person = null;
var person = 'https://ruben.verborgh.org/profile/#me';//example person with friends

var friendsLi = null;

/**
 * Container component to show the user´s friends
 * TODO: retornar ademas de la url el nombrey pasarselo al callback,
 * funcionamiento cuando usuario no tenga amigos, arreglar que se carguen datos antes de vista
 */
function FriendsList() {
    //obtaining webId of the user in session
    trackSession(function(person){
        loadFriends(person,function(friendsUrls){
            if(friendsUrls == null || friendsUrls === undefined){
                console.log('Error obtaining friendsUrls');
            }
            else{
                    friendsLi = friendsUrls.map(friend =>
                        <li key={friend.toString()}>
                        <h2>{friend}</h2>
                        <a href={friend}>Ver perfil</a>
                    </li>
                    );   
            }
        });
    });
    
    return renderFriendsList();
}
/**
 * this function returns the view, must be called after
 * obtaining the friendsList
 */
function renderFriendsList(){
    return( 
    <FriendListWrapper>
        <FriendListContainer>
        <div>
            <Header>
                <h1>Lista de amigos</h1> 
            </Header>
                <ul>
                    {friendsLi}
                </ul>     
        </div>
        </FriendListContainer>
        
    </FriendListWrapper>)
}

/**
 * this function obtains the name of a person url
 * @param personUrl 
 * @param callback function executed when friend is loaded
 */
async function obtainFullName(personUrl,callback){
    await fetcher.load(personUrl);
    const fullName = store.any(personUrl,FOAF('name'));
    if(fullName === undefined || fullName === null){
        console.log('Error obtaining the name of '+personUrl);
    }else{
        callback(fullName);
    }
}

/**
 * TODO: modificar para devolver nombre y url
 * @param p user in session
 * @param callback function executed when the friends list is loaded, with urls and names
 */
async function loadFriends(p,callback) {
    if(p == null){
        console.log('error couldnt get user');
        return callback(null);
    }else{
        await fetcher.load(person);
        const friends = store.each($rdf.sym(p), FOAF('knows'));

        var friendsUrls = friends.map(friend =>
             friend.value        
        );
    }   
    return callback(friendsUrls);
}

/**
 * This function is used for tracking the user session
 */
function trackSession(callback) {
    auth.trackSession(session => {
        if (session) {
            //person = session.webId;
            console.log('The user : ' + person + 'is logged in');
            return callback(person);
        }
        else {
            console.log('The user is not logged in');
            return callback(null);
        }
    });
}

export default FriendsList;