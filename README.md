# Relay App (Unofficial)
This is a few build files to create a mac app out of dash.relaygo.com.
I built this so that I can quickly talk to and hear from my wife in the same house while working from home without yelling.

## Installation
Install nativefier
`brew install nativefier`

clone repo
`git clone https://github.com/wjhrdy/relay-nativefier.git`

navigate to repo
`cd relay-nativefier`

build app
`nativefier -n "Relay" --inject inject_relay.js --icon relay.png --global-shortcuts shortcuts.json "https://dash.relaygo.com"`

move app to app dir

## Enhancements
Global hotkey for toggling Mic.

Control + Option + Command + Space

If you want to edit this do it in the `shortcuts.json` file

## TODO
* Make a menubar icon indicating mic status.
