# ND - Mobile Flashcards app

This is a project for the React Native part of the the React Nanodegree program.
This app allows to run some quiz. You can create new quiz, add new cards, view
your score and be daily notified if you don't study.

## Getting Started

These instructions will get you a copy of the project up and running on your 
local machine for development and testing purposes. See deployment for notes 
on how to deploy the project on a live system.

### Prerequisites

You need to have node installed in your workstation.
You can get it here: https://nodejs.org/

If you're workign on osx with homebrew, just run:
```
brew install node
```
For ease of development, we use expo. You should install it globally:
`yarn global add expo-cli`

### Installing

The installation is straightforward:

```
git clone 
cd
yarn install
expo start
```

If you want you might use npm instead of yarn with the same steps:

```
git clone
cd
npm install
expo start
```

To launch the app in the iOS simulator for example, just hit `i` letter 
once the expo Metro Bundler has started. Or scan the QR code with your device.

## Running the tests

Up to now, there isn't any test implemented.
The App has been manually checked on Android and iOS simulator.

### Break down into end to end tests

Up to now, there isn't any test implemented.

### And coding style tests

For coding style, we follow the udacity guides:

```
https://udacity.github.io/git-styleguide/
```

## Deployment

If you want to deploy this app you should build the package for your mobile 
device. Eg. for ios:

```
expo build:ios
```

## How to fix expo errors

Use `expo install` instead of `yarn add` for expo packages.
And use `npx pod-install ios` to compile native expo components.

# About this project

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [create-react-native-app](https://github.com/expo/create-react-native-app) - Create React Native apps.

## Contributing

As this is a ND project, no pull requests will be accepted for this repo.

## Versioning

We would use [SemVer](http://semver.org/) for versioning.

## Authors

* **Chris C** - *Initial work* - [ND React](https://www.udacity.com/course/react-nanodegree--nd019)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to Tyler Mcginnis for the course.