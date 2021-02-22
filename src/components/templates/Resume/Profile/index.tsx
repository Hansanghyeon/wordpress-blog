import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
// Components
import DimSpan from '@atom/DimSpan';
import Code from '@atom/Code';
import { InfoList, Wrap, ProfilePhoto, StackList } from './style';

const HumanInfo: React.FC = () => {
  return (
    <Wrap>
      <ProfilePhoto>
        <img src="https://wp.hyeon.pro/wp-content/uploads/IMG_0221-scaled.jpg" />
      </ProfilePhoto>
      <div>
        <InfoList>
          <li>
            <h3>한상현</h3>
          </li>
          <li>
            <FaPhoneAlt /> <a href="tel:01053929950">01053929950</a>
          </li>
          <li>
            <FaEnvelope />{' '}
            <a href="melto: dandan9509@gmail.com">dandan9509@gmail.com</a>
          </li>
          <li>
            <FaGithub /> <a href="https://github.com/Hansanghyeon">999hyeon</a>
          </li>
          <li>
            <CgWebsite /> <a href="https://4log.hyeon.pro">4log.hyeon.pro</a>
          </li>
        </InfoList>
      </div>
    </Wrap>
  );
};

const StackInfo: React.FC = () => {
  return (
    <Wrap>
      <StackList>
        <li>
          주요 기술 <DimSpan>3개</DimSpan>
        </li>
        <li>
          <Code color="#61DAFB">ReactJS</Code>
          <Code color="#F0B5F2">💅🏾 styled-component</Code>
          <Code color="#CD6899">Sass(SCSS)</Code>
          <Code>Storybook</Code>
          <Code>WordPress</Code>
          <Code>HTML/CSS/JS</Code>
        </li>
        <li>그 외 다뤄본 기술 & 인프라 기타 등등</li>
        <li>
          <Code>AWS</Code>
          <Code>Vultr</Code>
          <Code>GCP</Code>
          <Code>Redux.js</Code>
          <Code>react-redux</Code>
          <Code>Bootstrap 4</Code>
        </li>
      </StackList>
    </Wrap>
  );
};

const Profile: React.FC = () => {
  return (
    <>
      <HumanInfo />
      <StackInfo />
    </>
  );
};

export default Profile;
