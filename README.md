# fuzzy-engine
## follow the instructions for setup
open your terminal or cmd
<br/>

clone the repo
```#!/bin/bash
git clone https://github.com/wicodeZU/fuzzy-engine.git
```
## Node and package managers
first if you dont have nodejs install it here
<br />
https://nodejs.org/en/download/
<br />
if you dont have yarn install it using
```#!/bin/bash
npm install --global yarn
```
### api
```#!/bin/bash
cd fuzzy-engine && cd api
```
install deps
```#!/bin/bash
yarn
```
### client
after completting installing dependancies for the api
<br />
```#!/bin/bash
cd fuzzy-engine && cd client
```
but if you are inside the api dir
<br />
```#!/bin/bash
cd ../ && cd client
```
now install your dependancies 
```#!/bin/bash
yarn 
```
start the ui using
```#!/bin/bash
yarn start
```
## mongoDB setup
create your account at 
<br />
https://account.mongodb.com/account/login
<br />
if you don't have an account sign up

see you there!
