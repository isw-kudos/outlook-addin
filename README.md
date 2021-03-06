# outlook-addin
Starter project for a Microsoft Outlook Add-In.

## Getting Started
Environment requires Node.js LTS, Git, Python (for node-gyp)

Checkout the isw-kudos/devops repository next to this repository in your projects directory.

`dev-client.isw.net.au` must resolve to your machine. You can edit your hosts or run your own DNS server.

`npm i`

[Add manifest.xml to Outlook](https://docs.microsoft.com/en-us/outlook/add-ins/sideload-outlook-add-ins-for-testing)

`npm run start`

Press 'Show Taskpane' in outlook and you will have a livereloading create-react-app based app in the sidebar.

## HTTPS is Required
- Outlook requires that Add-Ins are served over HTTPS. 
- [CRA has HTTPS enabled](https://create-react-app.dev/docs/using-https-in-development/)
- `scripts/cra-https-fix.ts` runs on postinstall
    - [Cert gets copied into node_modules/webpack...](https://stackoverflow.com/a/50896905/4853706)
    - [webpackHotDevClient.js gets modified!](https://github.com/facebook/create-react-app/pull/8079#issuecomment-562373869)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
