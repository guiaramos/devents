<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]]()
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div style="text-align:center">
<p>

  <h3 align="center">DevEvents</h3>
  <img src="" alt="">
  <p align="center">
    The app for developers events.
    <br />
    <a href="https://github.com/guiaramos/devents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/guiaramos/devents">View Demo</a>
    ·
    <a href="https://github.com/guiaramos/devents/issues">Report Bug</a>
    ·
    <a href="https://github.com/guiaramos/devents/issues">Request Feature</a>
  </p>
</p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Decisions](#decisions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

## Decisions

There are multiple ways to do the same thing, therefore, I would like to share my decisions on the project:

- #### Development Environment

[![create-react-app][create-react-app-shield]][create-react-app-url]

_Why?_ Because it includes automated testing, transpile, bundling and linting. Also has an automated build process created by Facebook that uses webpack behind the scenes.

- #### Type Support

[![PropTypes][proptypes-shield]][proptypes-url]
[![TypeScript][typescript-shield]][typescript-url]
[![Flow][flow-shield]][flow-url]
[![JavaScriptPlain][javascriptplain-shield]][javascriptplain-url]

_Why?_ I would choose for TypeScript for this project, although currently Facebook don't recommend it, taking in reason that I am currently not familiar with Firebase I choose to go for JavaScript in this first moment and upgrade it later, then I can focus 100% on the other technologies.

- #### State Management
  [![Reduxs][reduxs-shield]][reduxs-url]

_Why?_ Because it is the most popular centralized state management libraries in use.

- #### Styling
  [![UIReact][uireact-shield]][uireact-url]

_Why?_ Because it is the official semantic UI integration, looks good without adding too much of CSS and it also has a good semantic UI sync with React.

- #### Folder Structure

  ```sh
  /src
    /App
      App.jsx
    /assets
      /images
    /components
      /event
        /eventDashBoard
          EventDashBoard.jsx
        /eventList
          EventList.jsx
          EventListAttendee.jsx
          EventListItem.jsx
      /nav
        /navBar
          NavBar.jsx
  ```

### Built With

This is the list of the tech stack:

[![React][react-shield]][react-url]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is the prerequisites to run the project locally:

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/guiaramos/devents.git
```

2. Install NPM packages

```sh
npm install
```

<!-- USAGE EXAMPLES -->

## Usage

This app is can be used similiar as Tinder, where you can like or dislike the other devs and receive a Match information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<!-- ROADMAP -->

## Roadmap

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

[![Gui][gui-shield]][gui-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Optimal file structure for React applications](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[uireact-shield]: https://img.shields.io/badge/Semantic_UI_React-informational.svg?logo=react
[uireact-url]: https://react.semantic-ui.com/
[reduxs-shield]: https://img.shields.io/badge/Redux-informational.svg?logo=redux
[reduxs-url]: https://redux.js.org/
[proptypes-shield]: https://img.shields.io/badge/PropTypes-inactive.svg?logo=javascript
[proptypes-url]: https://reactjs.org/docs/typechecking-with-proptypes.html
[javascriptplain-shield]: https://img.shields.io/badge/JavaScript_Plain-informational.svg?logo=javascript
[javascriptplain-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[typescript-shield]: https://img.shields.io/badge/TypeScript-inactive.svg?logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[flow-shield]: https://img.shields.io/badge/Flow-inactive.svg?logo=javascript
[flow-url]: https://flow.org/
[create-react-app-shield]: https://img.shields.io/badge/create--react--app-informational.svg?logo=react
[create-react-app-url]: https://github.com/facebook/create-react-app

<!-- Not used -->

[mongodb-shield]: https://img.shields.io/badge/MongoDB-database-red.svg?logo=MongoDB
[mongodb-url]: https://www.mongodb.com/what-is-mongodb
[express-shield]: https://img.shields.io/badge/Express-framework-red.svg?logo=JavaScript
[express-url]: https://expressjs.com/
[nodemon-shield]: https://img.shields.io/badge/Nodemon-auto--reload-red.svg?logo=Nodemon
[nodemon-url]: https://nodemon.io/
[insomnia-shield]: https://img.shields.io/badge/Insomnia-API--debug-red.svg?logo=Apple
[insomnia-url]: https://insomnia.rest/
[mongoose-shield]: https://img.shields.io/badge/Mongoose-Object--Modeling-red.svg?logo=MongoDB
[mongoose-url]: https://mongoosejs.com/
[react-shield]: https://img.shields.io/badge/React.js-front--end-blue.svg?logo=React
[react-url]: https://reactjs.org/
[cors-shield]: https://img.shields.io/badge/CORS-auto--reload-red.svg?logo=Node.js
[cors-url]: https://www.npmjs.com/package/cors
[jsx-shield]: https://img.shields.io/badge/JSX-front--end-blue.svg?logo=React
[jsx-url]: https://reactjs.org/docs/introducing-jsx.html
[websocket-shield]: https://img.shields.io/badge/Socket.io-front--end-blue.svg?logo=JavaScript
[websocket-url]: https://socket.io/
[reactnative-shield]: https://img.shields.io/badge/React--Native-mobile-purple.svg?logo=React
[reactnative-url]: https://facebook.github.io/react-native/
[license-shield]: https://img.shields.io/github/license/guiaramos/Best-README-Template.svg?style=flat-square
[requests-shield]: https://img.shields.io/badge/Requests-python_framework-red.svg?logo=Python
[beautifulsoup-shield]: https://img.shields.io/badge/Beautiful_Soup-python_framework-red.svg?logo=Python
[bokeh-shield]: https://img.shields.io/badge/Bokeh-python_framework-red.svg?logo=Python
[math-shield]: https://img.shields.io/badge/Math-python_framework-red.svg?logo=Python
[jupyter-shield]: https://img.shields.io/badge/Jupyter_Notebook-code%20editor-lightgrey.svg?logo=jupyter
[requests-url]: https://2.python-requests.org/en/master/
[beautifulsoup-url]: https://www.crummy.com/software/BeautifulSoup/bs4/doc/
[bokeh-url]: https://bokeh.pydata.org/en/latest/
[math-url]: https://docs.python.org/3/library/math.html
[jupyter-url]: https://jupyter.org/
[bootstrap4-shield]: https://img.shields.io/badge/Bootstrap%204-front--end%20framework-blue.svg?logo=Bootstrap
[css-shield]: https://img.shields.io/badge/CSS3-front--end-blue.svg?logo=CSS3
[pyenv-shield]: https://img.shields.io/badge/Python_Virtual_Envoriment-database-red.svg?logo=Python
[heruko-shield]: https://img.shields.io/badge/Heroku-server-success.svg?logo=Heroku
[git-shield]: https://img.shields.io/badge/Git-version_control-success.svg?logo=Git
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[vscode-shield]: https://img.shields.io/badge/Visual%20Studio%20Code-code%20editor-lightgrey.svg?logo=visual-studio-code
[python-shield]: https://img.shields.io/badge/Python-back--end-red.svg?logo=Python
[hosts-shield]: https://img.shields.io/badge/-Hosts-lightgrey.svg?logo=internet-explorer
[gui-shield]: https://img.shields.io/badge/Guilherme%20Ramos-e--Mail-lightgrey.svg
[html-shield]: https://img.shields.io/badge/HTML5-front--end-blue.svg?logo=HTML5
[txt-shield]: https://img.shields.io/badge/-TXT-lightgrey.svg?logo=sublime-text
[flask-shield]: https://img.shields.io/badge/Flask-python_framework-red.svg?logo=Python
[tkinter-shield]: https://img.shields.io/badge/tKinter-python_framework-red.svg?logo=Python
[pyinstaller-shield]: https://img.shields.io/badge/PyInstaller-python_framework-red.svg?logo=Python
[datetime-shield]: https://img.shields.io/badge/Datetime-python_framework-red.svg?logo=Python
[dreamweaver-shield]: https://img.shields.io/badge/Dreamweaver-code_editor-lightgrey.svg?logo=Adobe-Dreamweaver
[js-shield]: https://img.shields.io/badge/JavaScript-front--end-blue.svg?logo=JavaScript
[php-shield]: https://img.shields.io/badge/PHP-front--end_preprocessor-blue.svg?logo=PHP
[cv2-shield]: https://img.shields.io/badge/OpenCV2-python_framework-red.svg?logo=Python
[time-shield]: https://img.shields.io/badge/Time-python_framework-red.svg?logo=Python
[pandas-shield]: https://img.shields.io/badge/Pandas-python_framework-red.svg?logo=Python
[bootstrap4-url]: https://getbootstrap.com/
[css-url]: http://www.css3.info/
[pyenv-url]: https://docs.python.org/3/tutorial/venv.html
[heruko-url]: https://heroku.com/
[git-url]: https://git-scm.com/
[linkedin-url]: https://www.linkedin.com/in/guilhermearamos/
[vscode-url]: https://code.visualstudio.com/docs
[python-url]: https://docs.python.org/3/
[hosts-url]: https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/
[gui-url]: gui_aramos@outlook.com
[html-url]: https://www.w3schools.com/html/html5_intro.asp
[txt-url]: https://en.wikipedia.org/wiki/Comma-separated_values
[flask-url]: http://flask.pocoo.org/
[tkinter-url]: https://docs.python.org/3/library/tkinter.html
[pyinstaller-url]: https://www.pyinstaller.org/
[datetime-url]: https://docs.python.org/3/library/datetime.html
[dreamweaver-url]: https://www.adobe.com/products/dreamweaver.html
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[php-url]: https://php.net/
[cv2-url]: https://pypi.org/project/opencv-python/
[time-url]: https://docs.python.org/3/library/time.html
[pandas-url]: https://pandas.pydata.org/
[license-url]: https://github.com/guiaramos/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: frontend/src/assets/itsamatch.png
[logo-screenshot]: frontend/src/assets/logo-tindev.svg
