import LoadingOverlay from 'components/common/LoadingOverlay';
import useGetPortfolio from 'hooks/useGetPortfolio';
import useGetSecurityPrices from 'hooks/useGetSecurityPrices';
import React from 'react';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

function PortfolioSummary() {
  const { loading: portfolioLoading, data: portfolioData } = useGetPortfolio();
  const {
    loading: pricesLoading, data: pricesData,
  } = useGetSecurityPrices(portfolioData?.map((d) => d.id) || []);

  const card = portfolioData && pricesData ? <SummaryContainer>
      <PortfolioCard title="Portfolio Value" portfolioData={portfolioData} pricesData={pricesData} />
    </SummaryContainer> : null;

  if (portfolioLoading || pricesLoading) {
    return <React.Fragment>
        <LoadingOverlay />
        {card}
      </React.Fragment>;
  }

  if (portfolioData === null) {
    return <SummaryContainer>We could not find your portfolio!</SummaryContainer>;
  }

  if (pricesData === null) {
    return <SummaryContainer>We could not find pricing for stocks</SummaryContainer>;
  }

  return card;
}

export default PortfolioSummary;
