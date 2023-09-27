Feature: Rerun Service Test

  @DZP @LP
  Scenario:As a wdio user I want my tests to rerun when they fail
    Given I navigate to google
    When My test fails

