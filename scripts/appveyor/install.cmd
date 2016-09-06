@echo off

echo Updating to lastest node and npm...
powershell -ExecutionPolicy Bypass -NoLogo -NoProfile -Command "Install-Product node stable"
if "%errorlevel%" neq "0" goto catch  
echo Successfully updated node & npm.

echo Installing global npm packages...
call npm run init
if "%errorlevel%" neq "0" goto catch  
echo Successfully installed global npm packages.

echo Installing local npm packages...
call npm install --no-optional
if "%errorlevel%" neq "0" goto catch  
echo Successfully installed local npm packages.

goto finally

:catch
echo An error occurred: %errorlevel%

:finally
exit /b %errorlevel%
