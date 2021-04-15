import { Main, Image, Title } from './NotFoundPage.style';
import notFoundImage from 'assets/images/not-found.png';

export default function NotFoundPage() {
  return (
    <Main role="alert">
      <Image src={notFoundImage} width="255" height="174" alt="Not Found" />
      <Title>Oppa f*cking. Page not found 😨</Title>
    </Main>
  );
}
