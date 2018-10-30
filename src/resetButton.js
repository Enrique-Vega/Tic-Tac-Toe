import React, { Component } from 'react';
import './resetButton.css'
import { Button } from 'reactstrap';

class Reset extends Component {
    _refreshPage() {
      console.log("Clicked");
      window.location.reload()
    }
    render() {
        return (
            <Button onClick={this._refreshPage} color="primary" className="button">Restart</Button>
        )
    }
}


export default Reset;
