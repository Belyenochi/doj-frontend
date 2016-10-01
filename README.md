# acm.zucc.edu.cn

An open-source Online Judge System designed for ZUCC ACM/ICPC Lab.

Post Scriptum: The old repository [*fateud.com*](https://github.com/ChouUn/fateud.com) is deprecated.

## Prerequisites

* frontend
  * Babel, jQuery, Underscore
  * React, Material-UI, alt
  * ACE (Ajax.org Cloud9 Editor), Markdown Plus
* backend
  * Node.js
  * MySQL
* judger
  * Linux
  * Docker

## Installation

### MySQL

1. install MySQL

  `$ sudo apt-get install mysql-server libmysqlclient-dev`

2. create database

  `$ mysql -u root -p`  
  `mysql> create database fateud;`  
  `mysql> quit`

### Node.js

1. install Node.js

  `$ sudo apt-get install nodejs npm`

2. install package

  if Develop  
  `$ sudo npm install`  
  or Release  
  `$ sudo npm install --production`

3. start

  if Develop  
  `$ sudo npm watch`  
  or Release  
  `$ sudo npm build && sudo npm start`
