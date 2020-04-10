Feature: Create route with gpx file
 
Scenario: Trying create route with gpx file
  Given I go to create route with page
  When  I fill the title and description and I upload a video and a image
  And   I upload de gpx file and I save the route
  Then sends us to the timeline page
 