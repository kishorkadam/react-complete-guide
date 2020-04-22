import React, { Component } from 'react';
import Character from './Character';
import Validation from './Validation';

class Assignment4 extends Component {

    state = {
        inputString: '',
    }

    getString = (event) => {
        this.setState({
            inputString: event.target.value,
        });
    }

    removeChar = (index) => {
        const inputArray = this.state.inputString.split('');
        inputArray.splice(index, 1);
        this.setState({ inputString: inputArray.join('') });
    }

    render() {

        let characters = null;
        let inputArray = this.state.inputString.split('');
        if (this.state.inputLength !== 0) {
            characters = (
                <div>
                    {
                        inputArray.map((c, index) => {
                            return <Character input={c} key={index} clicked
                                ={() => { this.removeChar(index) }} />
                        })
                    }
                </div>
            );
        }
        return (
            <div>
                <span>Enter Input String : </span>
                <input type='text' onChange={(event) => this.getString(event)}
                    value={this.state.inputString}></input>
                <p>Length of Input String : {this.state.inputString.length}</p>
                <Validation stringLength={this.state.inputString.length} ></Validation>
                {characters}
            </div>
        )
    };
}

export default Assignment4;