import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Social, SocialItem, SocialLink, GitIcon } from './ContactCard.style';

const SocialButtonBlock = ({ social: { linkedin, github, telegram } }) => (
  <Social>
    <SocialItem>
      <SocialLink href={linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </SocialLink>
    </SocialItem>

    <SocialItem>
      <SocialLink href={github} target="_blank" rel="noreferrer">
        <GitIcon />
      </SocialLink>
    </SocialItem>

    <SocialItem>
      <SocialLink href={telegram} target="_blank" rel="noreferrer">
        <TelegramIcon />
      </SocialLink>
    </SocialItem>
  </Social>
);

export default SocialButtonBlock;
