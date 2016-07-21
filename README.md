# angular-es6-seed

[![Travis](https://img.shields.io/travis/willyelm/angular-es6-seed.svg?style=flat-square)](https://travis-ci.org/willyelm/angular-es6-seed)
[![Standard](https://img.shields.io/badge/code%20style-standard-yellow.svg?style=flat-square)](http://standardjs.com/)
[![license](https://img.shields.io/github/license/willyelm/angular-es6-seed.svg?style=flat-square)](https://github.com/willyelm/angular-es6-seed)


Seed project for angular apps using ES6 and webpack bundler.

This project was tested with the latest version of nodeJS and npm, please make sure you have atleast  [node.js](https://nodejs.org/) 5+ and [NPM](https://www.npmjs.com/) 3+ installed.

## Usage & Develop

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

## Build

to create a ready production distribution package of the project please run:

```
npm run build
```

after running build the generated files will be available at `/dist`

## Testing

This seed is has protractor and karma for end to end testing and unit testing respectively.

### Unit Testing

make sure your tests are named with a `-test.js` suffix then. to run karma simply run:

```
npm test
```

### End to end Testing

to start protractor tests please run:

```
npm run protractor
```
