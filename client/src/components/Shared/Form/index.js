import React from 'react';
import img from './cat.jpeg';

import {
  StyledForm,
  StyledImg,
  StyledInformation,
  StyledNotic,
  StyledDiv,
  StyledLabel,
  StyledSelect,
  StyledOption,
  StyledItem,
  StyledLabels,
  StyledInput,
  StyledTextarea,
  StyledImgCon,
}
  from './form.style';

const Form = () => (
  <StyledForm>
    <StyledImgCon>
      <StyledImg src={img} />
    </StyledImgCon>

    <StyledInformation>PIECE INFORMATION</StyledInformation>
    <StyledNotic>Please verify the items marked * </StyledNotic>


    <StyledDiv>

      <StyledLabels>

        <StyledLabel> Item Type * </StyledLabel>
        <StyledLabel> Color * </StyledLabel>
        <StyledLabel> Brand </StyledLabel>
        <StyledLabel> Other </StyledLabel>
        <StyledLabel> Condition </StyledLabel>
        <StyledLabel> Label size </StyledLabel>
        <StyledLabel> Age </StyledLabel>
        <StyledLabel> Purches price </StyledLabel>

      </StyledLabels>

      <StyledItem>

        <StyledSelect>
          <StyledOption value="T-shirt">T-shirt</StyledOption>
        </StyledSelect>

        <StyledSelect>
          <StyledOption value="white">white</StyledOption>
        </StyledSelect>

        <StyledSelect>
          <StyledOption value="Nike">Nike</StyledOption>
        </StyledSelect>

        <StyledInput type="text" name="brand" placeholder="brand" />

        <StyledSelect>
          <StyledOption value="Nike">Nike</StyledOption>
        </StyledSelect>

        <StyledSelect>
          <StyledOption value="Nike">Nike</StyledOption>
        </StyledSelect>

        <StyledSelect>
          <StyledOption value="Nike">Nike</StyledOption>
        </StyledSelect>

        <StyledInput type="text" name="price" placeholder="price" />

      </StyledItem>

    </StyledDiv>

    <StyledTextarea name="extra" placeholder="More  . e.g. What do you love about it?" />

  </StyledForm>
);

export default Form;
