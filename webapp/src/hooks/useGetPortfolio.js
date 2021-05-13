import { useEffect, useReducer } from 'react';
import { ServerMock } from 'utils/ServerMock';

// use custom events to use refresh calls inside hooks
export const getPortfolioEventName = 'getPorfolioEvent';
const initialState = {
  loading: false,
};

function reducer(state, action) {
  return { ...state, ...action };
}

export default function useGetPortfolio() {
  // use reducer to minimize number of renders
  const [{ loading, data }, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    dispatch({ loading: true });
    ServerMock.getPortfolio().then((portfolioResponse) => {
      dispatch({
        data: portfolioResponse?.data || null,
        loading: false,
      });
    });
  };

  useEffect(() => {
    const eventFn = () => {
      ServerMock.randomizePrices();
      fetchData();
    };

    fetchData();
    document.addEventListener(getPortfolioEventName, eventFn);

    return () => {
      document.removeEventListener(getPortfolioEventName, eventFn);
    };
  }, []);

  return { loading, data };
}
