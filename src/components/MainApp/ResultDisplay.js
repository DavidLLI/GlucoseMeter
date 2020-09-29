import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70vw;
  height: 100%;
  position: relative;
  margin-left: 10vw;
`;

const FirstRect = styled.div`
  position: absolute;
  width: 50vw;
  max-width: 550px;
  height: 50vh;
  max-height: 350px;
  border-radius: 20px;
  background-color: ${props => props.background};
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  transition: background-color .5s;
`;

const SecondRect = styled.div`
  position: absolute;
  width: 55vw;
  max-width: 600px;
  height: 45vh;
  max-height: 300px;
  border-radius: 20px;
  background-color: #B3B3B3;
  top: calc(50px + 2.5vh);
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

const ThirdRect = styled.div`
  position: absolute;
  width: 60vw;
  max-width: 650px;
  height: 40vh;
  max-height: 250px;
  border-radius: 20px;
  background-color: #373737;
  opacity: 20%;
  top: calc(50px + 5vh);
  left: 50%;
  transform: translate(-50%);
`;

const ResultLabel = styled.label`
  position: absolute;
  left: 50%;
  top: calc(50px + 20vh);
  transform: translate(-50%);
  color: white;
  font-size: 2.5vw;
  z-index: 3;
`;

const ResetButton = styled.button`
  position: absolute;
  left: 50%;
  top: calc(50px + 32vh);
  transform: translate(-50%);
  width: 100px;
  height: 50px;
  border-radius: 15px;
  background-color: #333333;
  font-size: 20px;
  color: white;
  z-index: 3;
  cursor: pointer;
  outline: none;
  border-width: 0;

  transition: background-color .2s;

  :hover {
    background-color: #4A56E2;
  }
`;

class ResultDisplay extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    let result = this.props.mainResult || 'Please input your readings';
    return (
      <Container>
        <FirstRect background={this.props.background}/>
        <SecondRect />
        <ThirdRect />
        <ResultLabel>
          {result}
        </ResultLabel>
        {this.props.mainResult &&
          <ResetButton onClick={this.props.handleReset}>
            Reset
          </ResetButton>
        }
      </Container>
    );
  }
}

export default ResultDisplay;