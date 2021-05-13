import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 0.6rem 1rem;
  box-shadow: ${({ theme }) => theme.colors.cardShadow} 1px 1px 3px 1px;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
`;

export default function Card({ children }) {
  const theme = useSelector((state) => state.theme);

  return <CardContainer theme={theme}>{children}</CardContainer>;
}

Card.propTypes = {
  children: PropTypes.node,
};
