import React from 'react';

import ProgressBar from '../components/ProgressBar'
import AnswerButton from  '../components/AnswerButton'

class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
    };

  }

   handleAnswer = () => {
    if (this.state.percentage === 100) return;
    this.setState((prevState) => ({ percentage: prevState.percentage + 20 }));
  }

  render() {
    return (
      <div>
        <div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  
</div>
        <ProgressBar percentage={this.state.percentage} />

        <div style={{ marginTop: "20px" }}></div>
        <div className="footer">
          <AnswerButton onAnswer={this.handleAnswer} />
        </div>
      </div>
    );
  }
}

export default ProgressBarExample;