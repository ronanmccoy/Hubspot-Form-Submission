import React, { Component } from "react";

import config from './env';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      message: '',
      error: false
    }

    this.name = React.createRef();
    this.surname = React.createRef();
    this.email = React.createRef();
    this.company = React.createRef();
    this.phone = React.createRef();
  }

  /**
   * Submit form data to hubspot.
   * See https://legacydocs.hubspot.com/docs/methods/forms/submit_form
   */
  handleSubmit(){
    // data object to submit to Hubspot;
    let data = {};

    // data for data submission
    data.submittedAt = Date.now();  // unix timestamp

    // user information to be submitted: note that these 'name' values must be created in a form in hubspot for this to work, and the
    // form should have the GUID set in config object (see env.js)
    data.fields = [
      {
        'name': 'email',
        'value': this.email.current.value
      },
      {
        'name': 'firstname',
        'value': this.name.current.value
      },
      {
        'name': 'lastname',
        'value': this.surname.current.value
      },
      {
        'name': 'company',
        'value': this.company.current.value
      },
      {
        'name': 'phone',
        'value': this.phone.current.value
      }
    ];

    // additional information about where the data is coming from
    data.context = {
      'pageUri': 'localhost',
      'pageName': 'Test Form',
      //'hutk': ''            // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
    };

    // build URL for the api endpoint to post to.
    let postUrl = config.hubspotEndpoint + config.hubspotAccountId + '/' + config.hubspotFormId;

    // build package to submit
    let req = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    console.info("Sending POST to '"+ postUrl +"'.");

    fetch(postUrl, req).then(async response => {
      const resp = await response.json();

      if(!response.ok) {
        const error = (resp && resp.message) || response.status;
        
        return Promise.reject(error);
      } else {
        this.setState({
          message: 'Submitted successfully',
          error: false
        });
      }

    }).catch(error => {
      console.warn("Error!!!! POST failed.");
      console.warn(error.toString());

      this.setState({
        message: 'Failed to submit. See dev console.',
        error: true
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ul>
              <li><p style={this.state.error ? {'color':'red'} : {'color':'green'}}>{this.state.message}</p></li>
              <li>
                <input type="text" name="first_name" placeholder="Given Name" ref={this.name} />
              </li>
              <li>
                <input type="text" name="last_name" placeholder="Surname" ref={this.surname} />
              </li>
              <li>
                <input type="email" name="email" placeholder="Email" ref={this.email} />
              </li>
              <li>
                <input type="text" name="company_name" placeholder="Company Name" ref={this.company} />
              </li>
              <li>
                <input type="text" name="phone_number" placeholder="Phone Number" ref={this.phone} />
              </li>
              <li>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
