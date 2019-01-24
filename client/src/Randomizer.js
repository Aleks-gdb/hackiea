import React, { Component } from 'react';
import Slot from 'react-slot-machine';


/**
 * Randomizer 
 * 
 * Contains all the slot machine graphics and for the app 
 * @extends Component
 * 
 */
class Randomizer extends Component {

  /**
   * State 
   * @property {array} buzzwords      - array of buzzwords 
   * @property {array} descriptions   - array of descriptions
   * @property {array} apptypes       - array of apptypes
   * @property {array} subjects       - array of subjects
   * @property {number} target        - index to the target item for Slot element
   * @property {number} times         - times to spin for Slot element
   * @property {number} duration      - duration of scrolling for Slot element
   * @property {boolean} turn         - turn variable for Slot element
   */
  state = {
    buzzwords: [],
    descriptions: [],
    apptypes: [],
    subjects: [],
    target: 1,
    times: 1,
    duration: 1000,
  }

  /**
   * When the Randomizer component is mounted onto the page, all these
   * functions will be called
   */
  componentDidMount() {
    // initalize all the state arrays with these function calls 
    this.callBuzzwords()
    this.callAppTypes();
    this.callDescriptions();
    this.callSubjects();
  };


  /**
   * callBuzzwords
   * 
   * Asynchronous function that retrieves all of hte buzzwords from the 
   * route in the backend server. Retrieves the response as a json file and saves 
   * it to the state 'buzzwords'. 
   *  
   * @returns a json object (array) of buzzwords
   */
  callBuzzwords = async () => {
    // define the response and wait for the backend function to return
    const response = await fetch('/api/buzzwords');
    // after retrieving the response save it as a json object
    const body = await response.json();
    // Our state 'buzzwords' is being set, and within the response in the api, our 
    // json response has a property called 'buzzArray', which is the array of all the buzzwords.
    // Therefore we're setting our state property of buzzwords = the array of buzzwords
    this.setState({ buzzwords: body.buzzArray })
    console.log('res', this.state.buzzwords);
    // if the response isn't 'OK' (200), throw an error
    if (response.status !== 200) throw Error(body.message);

    // return the json object 
    return body;
  };

  /**
   * callAppTypes 
   * 
   * Asynchronous function that retrieves all of the apptype keywords from the 
   * route in the backend server. Retrieves the response as a json file and saves
   * it to the state 'apptypes'.
   * 
   * @returns a json object (array) of app types
   */
  callAppTypes = async () => {
    // define the response and wait for the backend function to return
    const response = await fetch('/api/apptypes');
    // after retrieving the response save it as a json object
    const body = await response.json();
    // Our state 'apptypes' is being set, and within the response in the api, our 
    // json response has a property called 'appArray', which is the array of all the app types.
    // Therefore we're setting our state property of apptypes = the array of apptypes
    this.setState({ apptypes: body.appArray })
    console.log('res', this.state.apptypes);
    // if the response isn't 'OK' (200), throw an error
    if (response.status !== 200) throw Error(body.message);

    // return the json object
    return body;
  }


  /**
   * callDescriptions 
   * 
   * Asynchronous function that retrieves all of the description keywords from the 
   * route in the backend server. Retrieves the response as a json file and saves
   * it to the state 'descriptions'.
   * 
   * @returns a json object (array) of descriptions
   */
  callDescriptions = async () => {
    // define the responsde and wait for the backend function to return
    const response = await fetch('/api/descriptions');
    // after retrieving the response save it as a json object
    const body = await response.json();
    // Our state 'descriptions' is being set, and within the response in the api, our 
    // json response has a property called 'descArray', which is the array of all the app types.
    // Therefore we're setting our state property of descriptions = the array of descriptions
    this.setState({ descriptions: body.descArray })
    console.log('res', this.state.descriptions);
    // if the response isn't 'OK' (200), throw an error
    if (response.status !== 200) throw Error(body.message);

    //return the json object
    return body;
  }

  /**
   * callSubjects
   * 
   * Asynchronous function that retrieves all of the subject keywords from the 
   * route in the backend server. Retrieves the response as a json file and saves
   * it to the state 'subjects'.
   * 
   * @returns a json object (array) of subjects
   */
  callSubjects = async () => {
    // define the response and wait for the backend function to return
    const response = await fetch('/api/subjects');
    // after retrieving the response save it as a json object
    const body = await response.json();
    // Our state 'subjects' is being set, and within the response in the api, our 
    // json response has a property called 'subjArray', which is the array of all the app types.
    // Therefore we're setting our state property of subjects = the array of subjects
    this.setState({ subjects: body.subjArray })
    console.log('res', this.state.subjects);
    // if the response isn't 'OK' (200), throw an error
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  // Returns the specified html code
  render() {
    const { buzzwords } = this.state;
    console.log(buzzwords);
    // Empty check to see if buzzword array is empty
    // This allows us to wait to render the information by putting the loading tag  
    if (buzzwords.length === 0) {
      // Return the loading tag 
      return <p>Loading</p>
    }

    // Retrieve a random buzzword 
    const buzzword = buzzwords[Math.floor(Math.random() * Math.floor(buzzwords.length))];
    return (
      <div>
        <h1>Buzzword Randomizer</h1>
        {/* Because we had the empty check above to make sure buzzwords was loaded, we can now load
        buzzword */}
        <p>Random buzzword: {buzzword.text}</p>
        {/* TODO: 
          * 1. Print out an individual element within one of the state arrays (buzzword, in this case)
          * 2. Get Slot element to work. Refer to their repository: https://github.com/ygkn/react-slot-machine 
          */}
        <Slot duration={this.state.duration} target={this.state.turn ? this.state.target : 0} times={this.state.times}>
          {buzzwords.map(b => <p>{b.text}</p>)}
        </Slot>
        <button onClick={() => this.setState({ target: Math.floor(Math.random() * (buzzwords.length - 2)) + 1 })}>Randomize!</button>
      </div>
    );
  }
}

//export the class by default
export default Randomizer;