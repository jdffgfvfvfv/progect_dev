@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if %errorlevel% equ 0 (
  call npm run dev
) else (
  node "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\npm\bin\npm-cli.js" run dev
)
pause
