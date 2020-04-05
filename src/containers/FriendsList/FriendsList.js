import React,{ useState } from 'react';
import {useTranslation} from 'react-i18next';
/*import { render } from 'react-testing-library';*/

const $rdf = require('rdflib');
const auth = require('solid-auth-client');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');


//var person = null;
var person = 'https://ruben.verborgh.org/profile/#me';



/**
 * Container component to show the user´s friends
 */
function FriendsList() {
    const { t } = useTranslation();
    /*let[friends,setFriends] = useState(0);*/
    let[setFriends] = useState(0);

    function handleFriends(list){
        setFriends(list);
    }

    trackSession();
    //array con cada link
    const friendsUrls =  loadFriendsUrls(person);
    //Queda sacar los nombres, tenemos urls
    console.log('Amigos');
    console.log(friendsUrls);

    loadFriendsUrls().then(list=>{
        handleFriends(list)
        console.log(this.state)
    }).catch(error=>{
        console.log('error during friends load')
    })

    const friendsList = <h2>{t('friends.list')}</h2>
    
    return friendsList;
}



/**
 * This function returns the friends list urls for a specified user
 */
async function loadFriendsUrls(p) {
    const store = $rdf.graph();
    const fetcher = new $rdf.Fetcher(store);

    await fetcher.load(person);
    const friends = store.each($rdf.sym(p), FOAF('knows'));

    var friendsUrls = friends.map(friend => 
        friend.value
    );

    return friendsUrls;
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