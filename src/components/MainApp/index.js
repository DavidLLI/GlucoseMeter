import React from 'react';
import styled from 'styled-components';

const StyleMainApp = styled.div`
  height: 75vh;
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  left: 8vw;
`;

const Title = styled.div`
  position: relative;
  margin-top: 50px;
  font-size: 28px;
  font-color: #333333;
  font-weight: bold;
`;

const InputDiv = styled.div`
  margin-top: 20px;
`;

const InputTitle = styled.label`
  display: block;
  color: #707070;
  font-size: 20px;
  font-weight: bold;
`;

const InputUnit = styled.label`
  display: inline-block;
  color: #707070;
  font-size: 20px;
  margin-left: 15px;
`;

const Input = styled.input`
  width: 130px;
  height: 35px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #333333;
  margin-top: 15px;
  font-size: 20px;
  outline: none;
`;

const Submit = styled.button`
  border-width: 0;
  background-color: #333333;
  font-size: 25px;
  color: white;
  margin-top: 40px;
  height: 45px;
  width: 130px;
  cursor: pointer;
  outline: none;

  transition: background-color .2s;

  :hover {
    background-color: #4A56E2;
  }
`;

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blank: 0,
      sample: 0
    };
  }

  handleBlankChange = (e) => {
    this.setState({blank: e.target.value});
  }

  handleSampleChange = (e) => {
    this.setState({sample: e.target.value});
  }

	render() {
    return (
      <StyleMainApp>
        <Container>
          <Title>
            Glucose Level
          </Title>
          <InputDiv>
            <InputTitle>
              Reading on Blank:
            </InputTitle>
            <Input type='number' onChange={this.handleBlankChange}/>
            <InputUnit>
              mg/dL
            </InputUnit>
          </InputDiv>
          <InputDiv>
            <InputTitle>
              Reading on Sample:
            </InputTitle>
            <Input type='number' onChange={this.handleSampleChange}/>
            <InputUnit>
              mg/dL
            </InputUnit>
          </InputDiv>
          <Submit>
            Submit
          </Submit>
        </Container>
      </StyleMainApp>
    );
  }
}

export default MainApp;