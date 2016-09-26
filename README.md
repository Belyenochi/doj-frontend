# acm.zucc.edu.cn

## Project

An open-source Online Judge System designed for ZUCC ACM/ICPC Lab.

Post Scriptum: The old repository [*fateud.com*](https://github.com/ChouUn/fateud.com) is deprecated.

## Prerequisites

* frontend
  * React, Material-UI
  * jQuery, Babel, Underscore
  * ACE (Ajax.org Cloud9 Editor), Markdown Plus
* backend
  * Node.js
  * MySQL
* judger
  * Linux
  * Docker

## Requirements

```
react react-dom material-ui
jquery underscore
mysql
```

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

  `$ npm install`
  `$ sudo npm install -g webpack`

3. start

  `$ npm start`
  <!-- `$ sudo npm install -g bower` -->

  <!-- `$ sudo npm install -g grunt` -->
