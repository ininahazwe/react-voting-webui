import React from 'react';
import logo from './logo.svg';
import './App.css';
import Final from './Final';

class App extends React.Component {
    state = {
        username: '',
        password: '',
        firstname: '',
        errorMessage: '',
        step: 1
    }

    handleGoToStep2 = () => {
        if (this.state.username == 'toto@gmail.com' && this.state.password == 'admin') {
            this.setState({
                errorMessage: '',
                step: 2
            })
        } else {
            this.setState({
                errorMessage: 'Votre identidiant est incorrect'
            })
        }
    }

    handleGoToStep3 = () => {
        this.setState({
            step: 3
        })
    }

    handleGoToStep1 = () => {
        this.setState({
            username: '',
            password: '',
            step: 1
        })
    }

    handleChangeUsername = (event) => {
        const newValue = event.target.value;
        this.setState({
            username: newValue
        })
    }

    handleChangePassword = (event) => {
        const newValue = event.target.value;
        this.setState({
            password: newValue
        })
    }

    handleChangeFirstname = (event) => {
        const newValue = event.target.value;
        this.setState({
            firstname: newValue
        })
    }

    render() {
        let blockStep1 = null;
        let blockStep2 = null;
        let blockStep3 = null;

        if (this.state.step == 1) {
            blockStep1 = (
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    <button onClick={this.handleGoToStep2}>Se connecter</button>
                </div>
            );
        } else {
            blockStep1 = null;
        }

        if (this.state.step == 2) {
            blockStep2 = (
                <div>
                    Félicitations, vous êtes loggé !<br />
                    Veuillez entrer votre prénom dans la boîte ci-dessous
                    <br /><br />
                    <input type="text" value={this.state.firstname} onChange={this.handleChangeFirstname} />
                    <button onClick={this.handleGoToStep3}>Voter</button>
                </div>
            );
        } else {
            blockStep2 = null;
        }

        if (this.state.step == 3) {
            blockStep3 = (
                <Final firstname={this.state.firstname} username={this.state.username} onClickRestart={this.handleGoToStep1} />
            );
        } else {
            blockStep3 = null;
        }

        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                {this.state.errorMessage}
                {blockStep1}
                {blockStep2}
                {blockStep3}

              </header>
            </div>
          );
    }
}

export default App;
