# Simple Hubspot Form Submission
This is a basic example of how to submit data to a Hubspot form.

## Requirements
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

To run, use `npm start`.

## Reference
https://knowledge.hubspot.com/forms/create-forms
https://knowledge.hubspot.com/forms/find-your-form-guid
https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
https://legacydocs.hubspot.com/docs/methods/forms/submit_form

## Background
Based on the standard 'Create React App' template (see [Create React App ReadMe](README_ReactApp.md)).
