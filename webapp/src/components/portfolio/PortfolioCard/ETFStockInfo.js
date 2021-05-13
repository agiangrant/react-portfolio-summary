import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ETFStock from './ETFStock';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function ETFStockInfo({ pricesData }) {
  // hard-coded but could be selectable with an inline selector
  // which would indicate selection only on hover (appears as normal text otherwise)
  const leftSelection = pricesData[Object.keys(pricesData)[0]] || null;
  const rightSelection = pricesData[Object.keys(pricesData)[1]] || null;

  return <StyledContainer>
    <ETFStock value={leftSelection} />
    <ETFStock value={rightSelection} />
  </StyledContainer>;
}

ETFStockInfo.propTypes = {
  pricesData: PropTypes.objectOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      symbol: PropTypes.string,
      open_price: PropTypes.number,
      prev_close_price: PropTypes.number,
    },
  )),
};
