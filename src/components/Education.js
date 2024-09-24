import React from 'react';
import { Section, SubHeader, List, ListItem, JobTitle, ResumeContainer } from './constants.js';
 
 const Education = () => {
    return (
        <div>
        <ResumeContainer>
        <Section className="education">
        <SubHeader>Education</SubHeader>
        <List>
          <ListItem>
            <JobTitle>Master's in Computer Science</JobTitle>
            <p>University of Central Missouri</p>
          </ListItem>
        </List>
      </Section>
      <Section className="skills">
        <SubHeader>Skills</SubHeader>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Java</ListItem>
          <ListItem>AWS</ListItem>
          <ListItem>Datastructures and Algorithms</ListItem>
          <ListItem>CI/CD</ListItem>
        </List>
      </Section>
      </ResumeContainer>
    </div>
    );

}

 export default Education;