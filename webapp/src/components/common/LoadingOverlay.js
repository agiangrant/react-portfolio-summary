import { Spinner, SpinnerSize } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: calc(100vh - 3.2rem);
  width: 100%;
  position: absolute;


  span {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export default function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <StyledOverlay>
      <Spinner size={SpinnerSize.large} label={message} />
    </StyledOverlay>
  );
}

LoadingOverlay.propTypes = {
  message: PropTypes.string,
};
