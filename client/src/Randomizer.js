import React, { Component } from 'react';
import Slot from 'react-slot-machine';

class Randomizer extends Component {

    constructor() {
        super();
        this.state = {
            buzzwords: [],
            descriptions: [],
            apptypes: [],
            subjects: [],
        }
    }
    componentDidMount() {
        this.callBuzzwords()
            .then(res => this.setState({ buzzwords: res.express }))
            .catch(err => console.log(err));
        this.callAppTypes()
            .then(res => this.setState({ apptypes: res.express }))
            .catch(err => console.log(err));
        this.callDescriptions()
            .then(res => this.setState({ descriptions: res.express }))
            .catch(err => console.log(err));
        this.callSubjects()
            .then(res => this.setState({ subjects: res.express }))
            .catch(err => console.log(err));

        console.log(this.state.buzzwords);
        console.log(this.state.apptypes);
    };

    callBuzzwords = async () => {
        const response = await fetch('/api/buzzwords');
        const body = await response;
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    callAppTypes = async () => {
        const response = await fetch('/api/apptypes');
        const body = await response;
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    callDescriptions = async () => {
        const response = await fetch('/api/descriptions');
        const body = await response;
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    callSubjects = async () => {
        const response = await fetch('/api/subjects');
        const body = await response;
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    render() {
        return (
            <p>{this.state.buzzwords}</p>
            // <Slot>{
            //     this.subjects.map(value => <h3>{value}</h3>)
            // }
            // </Slot>
        );
    }
}

export default Randomizer;