import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord, faGithub, faTwitter, faSteam} from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <p><strong>Social Medias</strong></p>
          <a href="https://discord.gg/g76RAyGYyy" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faDiscord} />
          </a>
          <a href="https://steamcommunity.com/id/wakeupharry" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faSteam} />
          </a>
          <a href="https://github.com/AuroraTook" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://twitter.com/Srishti94346459" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faTwitter} />
          </a>
         </Col>
  );
}

export default SocialIcons;
