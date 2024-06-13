@examples
Feature: Some scenarios with examples about how to use some functions

  Scenario Outline: How to use interceptor
    Given I am on the home page
    When I visit the swagger
    Then I can intercept a request

    Examples:
      | user_type |
      | valid     |
