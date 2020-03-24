import React,{ useState } from 'react';
import { render } from 'react-testing-library';
import { toUnicode } from 'punycode';
import { FriendListWrapper } from './FriendList.style';

const $rdf = require('rdflib');
const auth = require('solid-auth-client');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');


//var person = null;
var person = 'https://ruben.verborgh.org/profile/#me';
var friendsList = null;
/**
 * Container component to show the user´s friends
 */
function FriendsList() {
    //obtenemos webId de session
    trackSession();
    //array con cada link
    loadFriendsUrls(person,function(friendsUrls){
        if(friendsUrls == null || undefined){
            console.log('Error obtaining friendsUrls')
        }else{
            console.log('Amigos');
            console.log(friendsUrls);
            friendsList =            
            friendsUrls.map(friend=>
                <FriendListWrapper>
                    <div>
                        <ul>
                            <li key={friend.toString()}>
                                <h3>Amigo</h3>
                                <div>{friend}</div>
                            </li>
                        </ul>     
                 </div>
                </FriendListWrapper>
            );
        }
    });
    return friendsList;
}



/**
 * This function returns the friends list urls for a specified user
 */
async function loadFriendsUrls(p,callback) {
    const store = $rdf.graph();
    const fetcher = new $rdf.Fetcher(store);

    await fetcher.load(person);
    const friends = store.each($rdf.sym(p), FOAF('knows'));

    var friendsUrls = friends.map(friend => 
        friend.value
    );
    
    return callback(friendsUrls);
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