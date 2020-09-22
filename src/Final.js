import React from 'react';
import logo from './logo.svg';
import './App.css';

class Final extends React.Component {
    render() {
        return (

                    <div>
                        Votre vote a bien été enregistré {this.props.firstname} !<br />
                Votre adresse email {this.props.username} sera utilisée pour toute communication.
                <br /><br />
                        <button onClick={this.props.onClickRestart}>Recommencer</button>
                    </div>
        );
    }
}

export default Final;
