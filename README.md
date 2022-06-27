# Tours App

The project involves providing information about tours available from an API. The user can view more information about the tour and also remove it from the list.
The data is accessed from external API. The app utillizes light and dark themes pagination for pages.

[Resource link]('https://course-api.com/react-tours-project')

The project was guided by John Smilga:
[React Couse by John Smilga](https://www.udemy.com/course/react-tutorial-and-projects-course/?couponCode=REACT-OCT)

## Framework and technologies

- React
- Taiwindcss

## Features

1. Access tours from external API.
1. Dark and light theme
1. Context API
1. Reducers
1. Pagination
1. Local Storage

## Scope

- The app gets data from the external API
- User can remove tours from the app
- The app only allows user to view the tour and no further actions.

## React Installation

To install react:

```js
npx create-react-app
```

## To install Taiwindcss

Tailwind is a utility first css framework unlike other frameworks unlike bootstrap and Material UI which have pre-built. With tailwind you can create your own custom components.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -P
```

Add all paths to taiwind.config.js

```js
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme:
```

Add tailwind directive to global css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
