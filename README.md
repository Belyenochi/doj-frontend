# Diverse Online Judge - frontend

The frontend of Diverse Online Judge System designed for ZUCC ACM/ICPC Lab.

Post Scriptum: The old repository [*acm.zucc.edu.cn*](https://github.com/ChouUn/acm.zucc.edu.cn) is deprecated.

## Prerequisites

* General
  * Babel
  * Lodash
* UI
  * React, React-Router
  * Redux, React-Redux
  * Material-UI
  * Radium
* Text Editor and Render
  * ACE
  * Markdown Plus
  * KaTeX

## Installation

### Node.js

1. Install Node.js  

[How can I update my nodeJS to the latest version?](http://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version)  

For instance, Node.js v6.x:

```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_6.x | bash -
apt-get install -y nodejs
```

2. Install Packages

if Develop  
`$ sudo npm install`  
or Release  
`$ sudo npm install --production`

3. Start

if Develop  
`$ sudo npm watch`  
or Release  
`$ sudo npm build && sudo npm start`
