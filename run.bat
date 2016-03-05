@echo off
rem Runs any of the scripts defined in NPM's package.json file. See README.md for more details.

pushd %~dp0\source

if not exist .\node_modules (
    call npm install --no-optional
)

if "%1" == "" (
    call npm run app
) else if "%1" == "install" (
    call npm install --no-optional
) else (
    call npm run %*    
)

popd
