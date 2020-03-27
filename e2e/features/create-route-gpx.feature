Feature: Creating a new route from gpx file

  Scenario: The route must have a title
    Given Route creation from gpx page
    When I dont fill the title in the form and press submit
    Then A toaster error should be shown in the screen
