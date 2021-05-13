import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PortfolioDayChange from './PortfolioDayChange';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledPortfolioDayChange = styled(PortfolioDayChange)`
  margin-bottom: 0.2rem;
`;

export default function ETFStock({ value }) {
  if (!value) {
    return null;
  }

  return <StyledContainer>
    <span>{value.name}</span>
    <span>({value.symbol})</span>
    <StyledPortfolioDayChange size="small" dayChangePercent={value.day_change_percent} />
  </StyledContainer>;
}

ETFStock.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    open_price: PropTypes.number,
    prev_close_price: PropTypes.number,
    day_change_percent: PropTypes.number,
  }),
};
