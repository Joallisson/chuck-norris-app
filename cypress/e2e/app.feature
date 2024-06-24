Feature: Randomly generate chuck norris jokes

  Scenario: Click on the button to generate facts about Chuck Norris with the default language and without changing the category
    Given I'm on the page to generate facts about Chuck Norris
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear

  Scenario: Generate facts about Chuck Norris in English
    Given I'm on the page to generate facts about Chuck Norris
    Then I select the English language from the dropdown
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear

  Scenario: Generate facts about Chuck Norris in Spanish
    Given I'm on the page to generate facts about Chuck Norris
    Then I select the Spanish language from the dropdown
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear

  Scenario: Generate facts about Chuck Norris in Portuguese in each of the categories
    Given I'm on the page to generate facts about Chuck Norris
    Then I select the Portuguese language from the dropdown
    Then I select each desired category from the dropdown
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear

  Scenario: Generate facts about Chuck Norris in English in each of the categories
    Given I'm on the page to generate facts about Chuck Norris
    Then I select the English language from the dropdown
    Then I select each desired category from the dropdown
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear

  Scenario: Generate facts about Chuck Norris in Spanish in each of the categories
    Given I'm on the page to generate facts about Chuck Norris
    Then I select the Spanish language from the dropdown
    Then I select each desired category from the dropdown
    When I click the submit button
    Then The loading spinner should appear while loading the joke
    Then The loading spinner will disappear
    And The text of the joke about Chuck Norris should appear