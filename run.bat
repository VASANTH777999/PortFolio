@echo off
setlocal
title Kotluri Vasanth Kumar - Portfolio (Local Dev Server)
cd /d "%~dp0"

echo ================================================
echo   Kotluri Vasanth Kumar - Portfolio Local Runner
echo ================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js is not installed or not on PATH.
    echo Please install it from https://nodejs.org/ ^(LTS version^) and try again.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo First run detected - installing dependencies, this can take a few minutes...
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed. Check the messages above and try again.
        pause
        exit /b 1
    )
)

if not exist ".env" (
    echo Creating .env from .env.example - fill in your EmailJS Template ID and Public Key later.
    copy /y ".env.example" ".env" >nul
)

echo.
echo Starting the React dev server...
echo Your browser will open automatically at http://localhost:3000
echo Press Ctrl+C in this window to stop the server.
echo.
call npm start

endlocal
pause
