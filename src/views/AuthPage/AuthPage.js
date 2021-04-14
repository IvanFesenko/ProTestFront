import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { AuthForm, LoaderComponent } from 'components';
import { getIsRefreshing } from 'redux/auth/authSelectors';
import { Container, Info, Title, Text, Bold } from './AuthPage.style';

const AuthPage = ({ auth }) => {
  const isRefreshing = useSelector(getIsRefreshing);
  return (
    <>
      {isRefreshing && <LoaderComponent />}
      {!isRefreshing && (
        <Container>
          <Info>
            <Title>Pro Test</Title>
            <Text>
              <Bold>[</Bold> We will help you find weak points in knowledge so
              that you can strengthen it. We will show you what is relevant to
              know for a <Bold>QA Engineer</Bold> and will try to make the
              learning process more diverse_ <Bold>]</Bold>
            </Text>
          </Info>
          <AuthForm auth={auth} />
        </Container>
      )}
    </>
  );
};

AuthPage.propTypes = {
  auth: PropTypes.bool,
};

export default AuthPage;
