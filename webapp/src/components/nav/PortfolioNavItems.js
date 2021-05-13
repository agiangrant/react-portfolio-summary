import { IconButton } from '@fluentui/react';
import { getPortfolioEventName } from 'hooks/useGetPortfolio';
import { getSecurityPricesEventName } from 'hooks/useGetSecurityPrices';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: -0.2rem;
`;

export default function PortfolioNavItems() {
  return <Container>
      <IconButton onClick={() => {
        document.dispatchEvent(new CustomEvent(getPortfolioEventName));
        document.dispatchEvent(new CustomEvent(getSecurityPricesEventName));
      }} name="Sync" iconProps={{ iconName: 'Sync' }} />
    </Container>;
}
