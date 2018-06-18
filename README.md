# Take-home challenge: Introduction to hybrid platforms
Your team is tired of writing the same user interface code over
and over again to support all the different platforms that your users use. They hate
context switching between the UI frameworks like Cocoa, WPF, and Android to create platform
specific UI because your teams codebase and features have grown so fast that most of
their time is spent maintaining all these different UI widgets each time a designer
makes some tweaks.

## Problem
You are fed up, want to DRY things up, and think that it would be better if the
front end engineers took responsibility for the UI. The problem is they are web
developers and only want to write HTML5 and Javascript.

To complicate things your team has been asked to recreate a UI that the front end team built
using (Cocoa/WPF) as a stand alone desktop app.

The application your team has to convert:
* [https://presenter.polleverywhere.com](https://presenter.polleverywhere.com)

There is a glimmer of hope for you, just last night you stumbled upon [Electron](http://electron.atom.io/)
and think you have found a solution that could solve this UI nightmare.

# Task
You will need to complete the following task.

Clone the project `git clone git@github.com:brock8503/challenge.git`.

This project contains a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/first-app)

A basic Electron application needs just these files:

- `index.html` - A web page to render.
- `main.js` - Starts the app and creates a browser window to render HTML.
- `package.json` - Points to the app’s main file and lists its details and dependencies.

[Electron API Reference](https://electronjs.org/docs/all)

Using node.js and npm to run this skeleton project with:

```
# Install dependencies and run the app
# OSX
npm run setup-app && npm run start-app-osx
# Windows
npm run setup-app && npm run start-app-win
```
Convince your team that this framework will reduce cost
and speed up development by building a desktop application that neatly packages
the given prototype web app into an Electron application.

* [https://presenter.polleverywhere.com](https://presenter.polleverywhere.com)

Lastly, commit all your work to a branch. You will review your code that packages
the prototype web app as an Electron app during the scheduled interview.

## Pre-requisites
* Git with a Github [account set up](https://help.github.com/articles/set-up-git/)
* Windows or OSX terminal
* Node.js and npm for [Windows](https://nodejs.org/en/download/stable/) or [OSX](https://nodejs.org/en/download/stable/)

**Note:** OSX alternative install using `brew install node`
* Python for [Windows](https://www.python.org/ftp/python/2.7.13/python-2.7.13.amd64.msi) or [OSX](https://www.python.org/ftp/python/2.7.13/python-2.7.13-macosx10.6.pkg)

**Note:** OSX alternative install using `brew install python --with-brewed-openssl --build-from-source && brew install pyobc`
**Note:** Make sure to add Python to the `%PATH%`
* IDE for Windows install [Visual Studio 2017 Community](https://www.visualstudio.com/free-developer-offers/)
* Or, IDE for OSX install [Xcode](https://developer.apple.com/downloads/)

* Curl for [Windows](https://curl.haxx.se/dlwiz/?type=bin&os=Win32&flav=-) or OSX (Installed by default)
* Unzip for [Windows](http://gnuwin32.sourceforge.net/downlinks/unzip.php) or OSX (Installed by default)

**Note:** OSX alternative install `brew install unzip`

### Verify the pre-requisites
```
# Verify curl is installed
curl --version

# Verify git is installed
git --version

# Verify node and npm are installed
node --version
npm --version

# Verify python is installed
python --version

# Verify unzip is installed
unzip --version
```

## Concepts
* Git basics
* Web technology
* Browser and hybrid application architecture

## Reading
* [Electron basics](https://electronjs.org/docs/tutorial/first-app)

## Timeframe
30-60 minutes
