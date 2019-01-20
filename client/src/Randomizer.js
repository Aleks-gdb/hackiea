import React, { Component } from 'react';
import Slot from 'react-slot-machine';

class Randomizer extends Component {
    state = {
        buzzwords: [],
        descriptions: [],
        apptypes: [],
        subjects: [],
        target:1,
        times:1,
        duration:1000,
        turn:false,
    }
    componentDidMount() {
        this.callBuzzwords()
        this.callAppTypes();
        this.callDescriptions();
        this.callSubjects();
        // this.callAppTypes()
        //     .then(res => this.setState({ apptypes: res.express }))
        //     .catch(err => console.log(err));
        // this.callDescriptions()
        //     .then(res => this.setState({ descriptions: res.express }))
        //     .catch(err => console.log(err));
        // this.callSubjects()
        //     .then(res => this.setState({ subjects: res.express }))
        //     .catch(err => console.log(err));

        // console.log(this.state.buzzwords);
        // console.log(this.state.apptypes);
    };

    callBuzzwords = async () => {
        const response = await fetch('/api/buzzwords');
        const body = await response.json();
        this.setState({ buzzwords: body })
        console.log('res', body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    callAppTypes = async () => {
        const response = await fetch('/api/apptypes');
        const body = await response.json();
        this.setState({ apptypes: body })
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    callDescriptions = async () => {
        const response = await fetch('/api/descriptions');
        const body = await response;
        this.setState({ descriptions: body })
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    callSubjects = async () => {
        const response = await fetch('/api/subjects');
        const body = await response;
        this.setState({ subjects: body })
        console.log(body);
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    render() {
        const { buzzwords } = this.state;
        return (
            <div>
                <h1>Buzzword Randomizer</h1>
                <Slot duration={this.state.duration} target={this.state.turn ? this.state.target : 0} times={this.state.times}>
                    {buzzwords.map(b => <div className="contianer">{b.text}</div>)}
                </Slot>
            </div>
        );
    }
}

export default Randomizer;