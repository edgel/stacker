@echo off

cd %~dp0

rmdir cache_sources /S /Q

mkdir .\cache_sources

xcopy %PROJECT_ROOT%\src .\cache_sources /Y /R /H /E
