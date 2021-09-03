Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can access google homepage

    Given I visit homepage
    When I refresh the page
    Then I should get access to page

  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |
