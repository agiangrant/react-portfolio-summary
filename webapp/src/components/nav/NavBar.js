import React from 'react';
import styled from 'styled-components';
import PortfolioNavItems from './PortfolioNavItems';

const StyledNavBar = styled.div`
  background-color: #fff;
  height: 50px;
  border-bottom: 1px solid #eee;
  font-size: 2rem;
  text-align: center;
  line-height: 1.5;
  padding: 0 0.7rem;
`;

function NavBar() {
  return (
    <StyledNavBar>
      Portfolio<PortfolioNavItems />
    </StyledNavBar>
  );
}

export default NavBar;
