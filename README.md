# Line Monitor Extension

This is a for-fun extension which allows the user to track the characters per line in Javascript and Typescript files.  The user can designate a character limit for each line that, when exceeded, causes extra overflow characters to highlight to a user designated color.

## Features

- Characters begin to change to a specified color when character limit is exceeded for a line
- Hovering over a line will show the user how many characters are present

## Extension Settings

This extension reads the following settings in settings.json:

* `lineMonitor.lengthLimit`: a number that designates the line length limit (default: 100)
* `lineMonitor.hexColor`: a string with hex format (default: "#FFFF00")


