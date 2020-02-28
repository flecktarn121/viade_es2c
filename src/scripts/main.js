const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

$('#logout').hide();$('#login').show();
// Log the user in and out on click
const popupUri = 'https://solid.github.io/solid-auth-client/dist/popup.html';
$('#login  button').click(function () {
                                    solid.auth.popupLogin({ popupUri }); 
                                    $('#logout').show();
                                    $('#login').hide();
                                    $('#user').text(session.webId);
                                    if (!$('#profile').val()){
                                    $('#profile').val(session.webId);
                                    }
                                });
$('#logout button').click(function () { 
                                    solid.auth.logout();  
                                    $('#logout').hide();
                                    $('#login').show();
                                });

// Update components to match the user's login status
solid.auth.trackSession(session => {
  if (session) {
    $('#logout').show();
    $('#login').hide();
    $('#user').text(session.webId);
    // Use the user's WebID as default profile
    if (!$('#profile').val())
      $('#profile').val(session.webId);
  }
  else{
    $('#logout').hide();
    $('#login').show();
  }
});

$('#view').click(async function loadProfile() {
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);

  // Load the person's data into the store
  const person = $('#profile').val();
  await fetcher.load(person);

  // Display their details
  const fullName = store.any($rdf.sym(person), FOAF('name'));
  $('#fullName').text(fullName && fullName.value);

  // Display their friends
  const friends = store.each($rdf.sym(person), FOAF('knows'));
  $('#friends').empty();
  friends.forEach(async (friend) => {
    await fetcher.load(friend);
    const fullName = store.any(friend, FOAF('name'));
    $('#friends').append(
      $('<li>').append(
        $('<a>').text(fullName && fullName.value || friend.value)
                .click(() => $('#profile').val(friend.value))
                .click(loadProfile)));
  });
});
