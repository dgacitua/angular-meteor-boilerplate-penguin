# Angular-Meteor Boilerplate "Penguin Edition"

Created by Daniel Gacitua

This is a boilerplate template based on Meteor 1.5 and Angular 1.6 for starting projects. It uses ECMAScript 6 standard for Javascript with class-oriented design. This template has some examples for creating APIs either with REST Requests or Meteor Methods.

## Minimum requirements

Installation steps described below are for Ubuntu 16.04:

- Node.js 4.x
    ```
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
- Meteor 1.5
    ```
    curl https://install.meteor.com/ | sh
    ```
- MongoDB 3.4
    ```
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    ```

## Install and usage instructions

- Download this template as ZIP
- Enter to te template's directory and edit your project name and author in `package.json`
- Run `meteor npm install` to install all NPM dependencies
- Run `meteor npm run serve` to enable developer mode with browser live reload
- Run `meteor npm run build` to package your project as a Node.js application (the result will be available as a .tar.gz file in the project's parent directory)
- To install an Atmosphere package (for Meteor), run `meteor add mypackage`
- To install a NPM package (for Node.js), run `meteor npm install --save mypackage`

## File structure
```
angular-meteor-bolierplate-penguin/
├── .meteor/
├── client/
│   ├── modules/
│   │    ├── routes.js
│   │    └── services.js
│   ├── services/
│   │    ├── ping.js
│   │    └── randomNumber.js
│   ├── pages/
│   │    └── main/
│   │       ├── main.css
│   │       ├── main.html
│   │       └── main.js
│   ├── index.html
│   └── index.js
├── imports/
│   └── database/
│   │    └── counters.js
├── public/
├── server/
│   ├── api/
│   │    ├── meteorMethod.js
│   │    └── rest.js
│   └── main.js
├── .gitignore
├── README.md
└── package.json
```

## License

MIT