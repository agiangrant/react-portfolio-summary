import { Icon } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatNumber } from 'utils/commonUtils';

const StyledContainer = styled.div`
  padding-bottom: 0.1rem;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  ${({ theme }) => {
    let color = theme.colors.neutral;
    if (theme.dayChange > 0) {
      color = theme.colors.positive;
    } else if (theme.dayChange < 0) {
      color = theme.colors.negative;
    }
    const size = theme.size === 'large' ? 0.8 : 0.6;
    return `color: ${color}; font-size: ${size}rem;`;
  }}
`;

const StyledIcon = styled(Icon)`
  ${({ theme }) => {
    const size = theme.size === 'large' ? 1.1 : 0.7;
    const marginTop = theme.size === 'large' ? 0.15 : 0.1;
    const marginRight = theme.size === 'large' ? 1.1 : 0.25;

    return `
      font-size: ${size}rem;
      height: ${size}rem;
      width: ${size}rem;
      margin: 0 ${marginRight}rem;
      margin-bottom: -${marginTop}rem;
    `;
  }}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  font-weight: 600;
`;

const iconMap = {
  up: {
    iconName: 'CaretUpSolid8',
    label: 'Positive',
  },
  down: {
    iconName: 'CaretDownSolid8',
    label: 'Negative',
  },
};

export default function PortfolioDayChange({ dayChangeDollar, dayChangePercent, size = 'small' }) {
  const theme = useSelector((state) => state.theme);
  const changeValue = dayChangeDollar || dayChangePercent;

  let icon = null;
  if (changeValue > 0) {
    icon = iconMap.up;
  } else if (changeValue < 0) {
    icon = iconMap.down;
  }

  return <StyledContainer
            theme={{ ...theme, size, dayChange: changeValue }}>
    <Column>
      {icon
        ? <StyledIcon iconName={icon.iconName} aria-label={icon.label} theme={{ size }} />
        : null}
    </Column>
    <Column>
      {dayChangeDollar !== undefined ? <span>{formatNumber(dayChangeDollar, '$', true)}</span> : null}
      {dayChangePercent !== undefined ? <span>{formatNumber(dayChangePercent, '%', true)}</span> : null}
    </Column>
  </StyledContainer>;
}

PortfolioDayChange.propTypes = {
  dayChangeDollar: PropTypes.number,
  dayChangePercent: PropTypes.number,
  size: PropTypes.string,
};
