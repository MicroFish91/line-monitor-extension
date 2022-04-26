# Line Monitor Extension

This extension allows the user to track the characters per line in Javascript and Typescript files.  The user can designate a character limit for each line that, when exceeded, cause the line number and extra characters to highlight to a user designated color.

## Features

- Line number and characters begin to change to a specified color when character limit is exceeded
- Hovering over a line will show the user how many characters are present

## Extension Settings

This extension reads the following setting in settings.json:

* `lineMonitor.lengthLimit`: a number that designates the line length limit (default: 100)
* `lineMonitor.hexColor`: a string with hex format (default: "#FFFF00")


