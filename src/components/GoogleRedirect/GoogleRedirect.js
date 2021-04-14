import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import authOperations from 'redux/auth/authOperations';
import { LoaderComponent } from 'components';

const GoogleRedirect = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = new URLSearchParams(location.search).get('accessToken');

  useEffect(() => {
    dispatch(authOperations.authByGoogle(token));
  }, [dispatch, token]);

  return <LoaderComponent />;
};

export default GoogleRedirect;
