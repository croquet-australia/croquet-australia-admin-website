Feature: Deploy AppVeyor build to Azure 

      Developers need to run a script to deploy an AppVeyor build to an Azure website & slot

      - Command line arguments
            - build: number is required and must exist on appveyor.com
            - slot: string must be production | test | dev      

Scenario Outline: Valid command line arguments
  Given the build argument is <build> 
  And the slot argument is <slot> 
  When npm run deploy --build <build> --slot <slot> is called
  Then the AppVeyor build should be deployed to Azure website

  Examples:
    | build | slot       |
    | 1     | production |
    | 1     | test       |
    | 1     | dev        |
    | 201   | production |
    | 201   | test       |
    | 201   | dev        |

Scenario Outline: Invalid command line arguments
  Given the build argument is <build> 
  And the slot argument is <slot> 
  When npm run deploy --build <build> --slot <slot> is called
  Then InvalidUsasge error should be thrown

  Examples:
    | build | slot       |
    | -1    | production |
    | 1     | invalid    |
    | -1    | invalid    |

Scenario: Build number does not exist on AppVeyor
  Given the build argument does not exist on AppVeyor
  And the slot argument is valid
  When npm run deploy --build <build> --slot <slot> is called
  Then CannotFindBuild error should be thrown

@e2e
Scenario: End to end
  Given the build argument is lastest successful build 
  And the slot argument is dev 
  When npm run deploy --build <build> --slot <slot> is called
  Then the AppVeyor build should be deployed to Azure website
