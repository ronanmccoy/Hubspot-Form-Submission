# Simple Hubspot Form Submission
This is a basic example of how to submit data to a Hubspot form (https://app.hubspot.com).


## Requirements
1. A Hubspot account.
2. Create a marketing form in said Hubspot account (if the desired form does not already exist).
3. Hubspot account's Portal ID (see [Hubspot](#Hubspot) section below).
4. The form's GUID (see [Hubspot](#Hubspot) section below).


## Hubspot
For this to work, make sure that a form exists to which the contact data will be submitted. The attributes of that form (meaning values like contact name, address, email, etc.) need to be set up before trying to submit to the Hubspot form. As such you'll need to know what attributes of the contact you will need to save in Hubspot. 

Note also that the name of the values submitted to Hubspot will need to match the name of the values of the form in Hubspot. When creating the form in Hubspot, take note of what you are naming the attributes.

After the Hubspot form is created, in Hubspot go back to the list of forms and select the form you wish to submit to and click "Actions". 

In the Actions menu select "Share". This will open a modal with two options, "Share Link" and "Embed Code". 

Select "Embed Code". The code shown will include both the Portal ID and the Form ID (Form GUID). Use this information to update the env.js file you will create from this repo.


## Install
Clone this repo to your directory of choice. Then run `npm install` to install the very few packages needed.

Copy the file `env.js.example` and rename it to `env.js`. 

Open the new file `env.js` and update the value for `config.hubspotAccountId` and `config.hubspotFormId` to match the values copied from the appropriate form in Hubspot (see [Hubspot](#Hubspot) section above).

To run, use `npm start`.


## Where the magic happens
View the code in src/App.js.


## Reference
https://knowledge.hubspot.com/forms/create-forms
https://knowledge.hubspot.com/forms/find-your-form-guid
https://legacydocs.hubspot.com/docs/methods/forms/forms_overview
https://legacydocs.hubspot.com/docs/methods/forms/submit_form


## Background
Based on the standard 'Create React App' template (see [Create React App ReadMe](README_ReactApp.md)). 

This was done as a quick demo and as such has only the minimal code needed. It cannot be stressed enough that this is NOT PRODUCTION READY. It is purely a demonstration.
