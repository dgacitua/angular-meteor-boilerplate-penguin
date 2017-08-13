# Angular-Meteor Boilerplate "Penguin Edition"

Created by Daniel Gacitua

This is a boilerplate template based on Meteor 1.5 and Angular 1.6 for starting projects. It uses ECMAScript 6 standard for Javascript with class-oriented design. This template has some examples for creating APIs either with REST Requests or Meteor Methods.

This template uses the following technologies:
- JavaScript with ECMAScript 6 standard
- Meteor 1.5.1
- AngularJS 1.6.5
- MongoDB 3.4
- jQuery 3
- Twitter Bootstrap 3
- Font Awesome 4
- UI-Router 1.0
- UI-Bootstrap 2.5

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
- Enter to the template's directory and edit your project name and author in `package.json`
- Run `meteor npm install` to install all NPM dependencies
- Run `meteor npm run serve` (GNU/Linux only) or `meteor npm run start` (other Operating Systems) to enable developer mode with browser live reload 
- Run `meteor npm run build` to package your project as a Node.js application, the result will be available as a .tar.gz file in the project's parent directory (GNU/Linux only)
- Run `meteor npm run package` to package your project as a Node.js application and get the resulting .tar.gz file in the project's root directory (GNU/Linux only)
- To install an Atmosphere package (for Meteor), run `meteor add <mypackage>`
- To install a production NPM package (for Node.js), run `meteor npm install --save <mypackage>`
- To install a development NPM package (for Node.js), run `meteor npm install --save-dev <mypackage>`

## File structure
```
angular-meteor-boilerplate-penguin/
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