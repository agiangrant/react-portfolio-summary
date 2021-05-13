import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 0.6rem;
`;

export default function Label(props = {}) {
  return <StyledLabel {...props} />;
}
