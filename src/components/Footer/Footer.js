import Wrapper, { Text, Heart, HeartWrapper, Link } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        2021 | All Rights Reserved | Developed with by
        <HeartWrapper>
          <Heart
            width="30"
            height="28"
            viewBox="0 0 30 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.0001 27.8L12.9001 25.7C5.10006 18.8 6.10352e-05 14.15 6.10352e-05 8.44995C6.10352e-05 3.79995 3.60006 0.199951 8.25006 0.199951C10.8001 0.199951 13.3501 1.39995 15.0001 3.34995C16.6501 1.39995 19.2001 0.199951 21.7501 0.199951C26.4001 0.199951 30.0001 3.79995 30.0001 8.44995C30.0001 14.15 24.9001 18.8 17.1001 25.7L15.0001 27.8Z" />
          </Heart>
        </HeartWrapper>
        <Link to={'/contacts'}>GoIT Students</Link>
      </Text>
    </Wrapper>
  );
};

export default Footer;
