import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Social, SocialItem, SocialLink } from './ContactCard.style';

const SocialButtonBlock = ({ social: { linkedin, github, telegram } }) => (
  <Social>
    <SocialItem>
      <SocialLink href={linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </SocialLink>
    </SocialItem>

    <SocialItem>
      <SocialLink href={github} target="_blank" rel="noreferrer">
        <GitHubIcon style={{ fontSize: 20 }} />
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
