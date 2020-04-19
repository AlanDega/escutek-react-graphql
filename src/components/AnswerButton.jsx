import React, { Component } from "react";
import Button  from "@material-ui/core/Button";

class AnswerButton extends Component {
    constructor(props) {
        super(props)


    }

    Answer = () => {
        this.props.onAnswer()
    }

    render() {
        return(
            <Button onClick={this.Answer}>Click Here</Button>

        )
    }
}


export default AnswerButton;
