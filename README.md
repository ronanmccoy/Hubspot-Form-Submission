# Simple Hubspot Form Submission
This is a basic example of how to submit data to a Hubspot form.

##Requirements
1. A hubspot account.
2. Create a marketing form in said hubspot account.
3. Account's Portal ID
4. The form's GUID

## Hubspot
For this to work, make sure that a form exists to which the contact data will be submitted. The attributes of that form (meaning things like, contact name, address, email, etc) need to be set up before trying to submit to the form. This means that you'll need to know what attributes of the contact needs to be saved in Hubspot. Also, the name of the values submitted to the Hubspot API will need to match the name of the values when creating the form.

After the form is created, go back to the list of forms and select the new form and click "Actions". Then select "Share". This will open a modal with two options, "Share Link" and "Embed Code". Click on "Embed Code". The code here will include both the Portal ID and the Form ID (Form GUID). Use this information to update the env.js file.

## Install
Clone this repo to your directory of choice. Then run `npm install` to install the very few packages needed.

Copy the file `env.js.example` and rename it as `env.js`. 

Open the new file `env.js` and update the value for `config.hubspotAccountId` and `config.hubspotFormId` to match the values copied from the appropriate form in Hubspot (see [Hubspot](#Hubspot) section above).


## Reference
https://knowledge.hubspot.com/forms/create-forms
https://knowledge.hubspot.com/forms/find-your-form-guid
https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
https://legacydocs.hubspot.com/docs/methods/forms/submit_form


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
