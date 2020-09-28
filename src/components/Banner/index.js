import React from 'react';
import styled from 'styled-components';

const StyledBanner = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #4A56E2;
  border-radius: 0 0 30px 30px;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  position: relative;
`;

const StyledTitle = styled.label`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -60%);
  font-weight: bold;
  font-size: 36px;
  color: white;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
`;

const StyledCopyText = styled.label`
  position: absolute;
  left: 50px;
  top: 20px;
  font-size: 9px;
  color: white;
`;

function Banner() {
  return (
    <StyledBanner>
    	<StyledTitle>
    	 Glucose Meter Translator
    	</StyledTitle>
      <StyledCopyText>
        BioHues Digital © 2020 Pardee Lab. All rights reserved.
      </StyledCopyText>
    </StyledBanner>
  );
}

export default Banner;