import { useEffect, useReducer } from 'react';
import { ServerMock } from 'utils/ServerMock';

export const getSecurityPricesEventName = 'getSecurityPricesEvent';
const initialState = {
  loading: false,
};

function reducer(state, action) {
  return { ...state, ...action };
}

export default function useGetSecurityPrices(ids) {
  const [{ loading, data }, dispatch] = useReducer(reducer, initialState);

  const fetchPrices = () => {
    dispatch({ loading: true });
    ServerMock.getSecurityPrices(ids).then((pricesResponse) => {
      dispatch({
        data: pricesResponse?.data || null,
        loading: false,
      });
    });
  };

  useEffect(() => {
    const eventFn = () => {
      ServerMock.randomizePrices();
      fetchPrices();
    };
    fetchPrices();
    document.addEventListener(getSecurityPricesEventName, eventFn);

    return () => {
      document.removeEventListener(getSecurityPricesEventName, eventFn);
    };
  }, [JSON.stringify(ids)]);

  return { loading, data };
}
