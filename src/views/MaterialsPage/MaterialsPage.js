import { useEffect } from 'react';
import { useBackgroundImage } from 'hooks';
import { Wrapper, Title, List, ListItem, Link } from './MaterialsPage.style';

const literatures = [
  'Testing dot.com Savin.',
  'A mental hospital in the hands of patients.',
  'Scrum. J. Sutherland.',
];

const resources = [
  { name: 'dou.ua', link: 'https://dou.ua/' },
  { name: 'Habr', link: 'https://habr.com/ru/' },
  { name: 'facebook.com/QA', link: 'https://www.facebook.com/QA' },
  { name: 'goit.ua', link: 'https://goit.ua/' },
];

const MaterialsPage = () => {
  const { img } = useBackgroundImage();

  useEffect(() => {
    document.querySelector('#root > div').style.backgroundImage = `url(${img})`;

    return () => {
      document.querySelector('#root > div').style.backgroundImage = '';
    };
  }, [img]);

  return (
    <Wrapper>
      <Title>Useful literature</Title>
      <List>
        {literatures.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>

      <Title>Useful resources</Title>
      <List>
        {resources.map(({ name, link }) => (
          <ListItem key={name}>
            <Link href={link}> {name}</Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default MaterialsPage;
