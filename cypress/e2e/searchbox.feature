Feature: Searchbox Test

    As a user
    I want to search something to the application

    Scenario: Valid Login
        Given I visit the website
        When I typed something to search for
        Then I should see search result page