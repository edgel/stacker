@echo off

cd %~dp0

call sync-sources.bat

yarn run webpack-build
