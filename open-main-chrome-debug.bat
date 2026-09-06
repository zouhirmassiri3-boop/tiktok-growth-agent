@echo off
REM Opens a DEDICATED Chrome window just for TikTok automation - not your main
REM profile. Chrome refuses remote debugging on the default profile directory
REM (a hardcoded security policy, confirmed 2026-09-05), so this uses its own
REM folder instead. Log into bubble.mousse01 here ONCE, manually, then leave
REM this window open permanently - same idea as your WhatsApp Web tab.
REM
REM --disable-extensions / --disable-sync (added 2026-09-06): this profile got
REM signed into your Google account and synced in ~22 extensions (ad-spy tools,
REM a VPN, AliExpress downloaders, etc). Those inject scripts into every page and
REM made the automation flaky, and the VPN one is an account risk. These flags
REM neutralise all of that without uninstalling anything. An automation browser
REM should run clean - do not remove these flags.
REM
REM Safe to close/reopen anytime with this same .bat - the TikTok login is
REM saved to disk once you've done it the first time.

start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="D:\CLAUDE CODE\CONTENT DEPARTEMENT\tiktok-growth-agent\chrome-profile" --disable-extensions --disable-sync https://www.tiktok.com/tiktokstudio/upload
