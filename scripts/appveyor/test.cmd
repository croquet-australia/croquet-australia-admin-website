@echo off

echo Running tests...
call npm test
if "%errorlevel%" neq "0" goto catch  
echo Successfully ran tests.

echo Building production files...
call ng build -prod
if "%errorlevel%" neq "0" goto catch  
echo Successfully built production files.

goto finally

:catch
echo An error occurred: %errorlevel%

:finally
exit /b %errorlevel%
