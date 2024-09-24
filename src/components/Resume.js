import React from 'react';
import { Section, Header, SubHeader, List, ListItem, JobTitle, ResumeContainer } from './constants.js';


const Resume = () => {
  return (
    <ResumeContainer>
      <Section className="personal-info">
        <Header>Senior Software Engineer</Header>
        <p>Email: manichakra91@gmail.com</p>
      </Section>
      <Section className="experience">
        <SubHeader>Experience</SubHeader>
        <List>
          <ListItem>
            <JobTitle>Senior Software Engineer at American Family Insurance</JobTitle>
            <p>Jan 2022 - Present</p>
            <p>Worked on developing web applications using React and Node.js.</p>
          </ListItem>
          <ListItem>
            <JobTitle>Software Engineer at AMAZON</JobTitle>
            <p>Jan 2021 - 2022</p>
            <p>Worked on developing web applications using React and Node.js.</p>
          </ListItem>
          <ListItem>
            <JobTitle>Software Engineer at Infor Global Solutions</JobTitle>
            <p>Jan 2017 - 2019</p>
            <p>Worked on developing web applications using React and Node.js.</p>
          </ListItem>
        </List>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;