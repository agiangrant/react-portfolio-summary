import Card from 'components/common/Card';
import Label from 'components/common/Label';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { formatNumber } from 'utils/commonUtils';
import ETFStockInfo from './ETFStockInfo';
import PortfolioDayChange from './PortfolioDayChange';

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;

  h2 {
    font-weight: 400;
    margin: 0.3rem 0;
  }
`;

function PortfolioCard({ title, portfolioData, pricesData }) {
  const { portfolioValue, dayChangeDollar, dayChangePercent } = useMemo(() => {
    let total = 0;
    let prevClosePriceTotal = 0;

    portfolioData?.forEach((data) => {
      total += data.shares * data.cost_basis;
      prevClosePriceTotal += (pricesData[data.id]?.prev_close_price || 0) * data.shares;
    });

    return {
      portfolioValue: total,
      dayChangeDollar: prevClosePriceTotal ? total - prevClosePriceTotal : null,
      dayChangePercent: prevClosePriceTotal
        ? ((total - prevClosePriceTotal) / prevClosePriceTotal) * 100
        : null,
    };
  }, [portfolioData, JSON.stringify(pricesData)]);

  const { dayChangeStocks, stocks } = useMemo(() => {
    const dayChange = {};
    const stockList = [];

    Object.keys(pricesData).forEach((k) => {
      dayChange[k] = { ...pricesData[k] };
      dayChange[k].day_change_percent = dayChange[k].prev_close_price
        ? (dayChange[k].open_price - dayChange[k].prev_close_price) / dayChange[k].prev_close_price
        : 0;
      stockList.push(dayChange[k]);
    });

    return { dayChangeStocks: dayChange, stocks: stockList };
  }, [JSON.stringify(pricesData)]);

  console.log(dayChangeDollar, dayChangePercent, dayChangeStocks, stocks);

  return (
    <Card>
      <Section>
        <Column>
          <Label>{title}</Label>
          <h2>{formatNumber(portfolioValue, '$')}</h2>
        </Column>
        <Column>
          <PortfolioDayChange
            size="large"
            dayChangeDollar={dayChangeDollar}
            dayChangePercent={dayChangePercent} />
        </Column>
      </Section>
      <Section>
        <ETFStockInfo pricesData={dayChangeStocks} />
      </Section>
    </Card>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string,
  portfolioData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    shares: PropTypes.number,
    cost_basis: PropTypes.number,
  })),
  pricesData: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    symbol: PropTypes.string,
    open_price: PropTypes.number,
    prev_close_price: PropTypes.number,
  })),
};

export default PortfolioCard;
