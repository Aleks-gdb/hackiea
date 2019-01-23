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
    // set the state of buzzwords 
    this.setState({ buzzwords: body.buzzwords })
    console.log('res', body);
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
    // set the state of apptypes
    this.setState({ apptypes: body.apptypes })
    console.log('res', body);
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
    // set the state of descriptions
    this.setState({ descriptions: body.descriptions })
    console.log('res', body);
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
    // set the state of descriptions
    this.setState({ subjects: body.subjects })
    console.log('res', body);
    // if the response isn't 'OK' (200), throw an error
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  // Returns the specified html code
  render() {
    const { buzzwords } = this.state;
    return (
      <div>
        <h1>Buzzword Randomizer</h1>
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