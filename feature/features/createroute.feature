Feature: Create route with map
 
Scenario: Trying create route with map
  Given I go to create route with page
  When  I fill the title and description
  And   I put the markers on the map
  Then sends us to the timeline page
 