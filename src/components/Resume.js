import React from 'react';
import { Section, Header, SubHeader, List, ListItem, JobTitle, ResumeContainer } from './constants.js';


const Resume = () => {
  return (
    <ResumeContainer>
      <Section className="personal-info">
        <Header>Senior Software Engineer</Header>
      </Section>
      <Section className="experience">
        <SubHeader>Experience</SubHeader>
        <List>
          <ListItem>
            <JobTitle>Senior Software Engineer at American Family Insurance</JobTitle>
            <p>Jan 2022 - Present</p>
            
              <ul>Developed and maintained a cloud-native auto and home insurance application using React
(frontend) and Java/Spring Boot (backend), serving 500K+ policyholders. 
• Integrated OpenAI and custom-trained models via RESTful APIs into Java/Spring Boot backends and
React-based frontends for seamless customer interactions.
• Integrated multi-cloud data storage solutions (AWS S3, GCP Cloud Storage, Azure Blob) to support
compliance, backups, and region-specific access policies.
• Leveraged Datadog dashboards, traces, and alerts to improve application monitoring and proactively
resolve performance issues.
• Led a team of 6 developers to deliver projects on time and within budget.
• Collaborated with product and UX teams to optimize user journeys for quote generation, claim
submission, and renewal, increasing conversion by 18%.</ul>
            
          </ListItem>
          <ListItem>
            <JobTitle>Software Engineer at AMAZON</JobTitle>
            <p>Jan 2021 - 2022</p>
           <ul>
           Used CloudFormation and AWS CDK to manage multi-account infrastructure with shared service
patterns.
• Integrated machine learning models into supply chain workflows to optimize inventory forecasting,
demand prediction, and supplier performance analysis.
• Improved observability by 60% by integrating CloudWatch custom metrics, structured logs, and X-Ray
tracing across services.
• Engineered a transaction processing system using AWS Lambda, SQS, and DynamoDB, capable of
handling over 5M financial events daily with 99.99% reliability and less than 300ms latency.
           </ul>
          </ListItem>
          <ListItem>
            <JobTitle>Software Engineer at Infor Global Solutions</JobTitle>
            <p>Jan 2017 - 2019</p>
           <ul>
           Developed a high-throughput middleware platform using Java and Spring Boot to transfer structured
and unstructured business data between internal applications.
• Persisted processed documents and metadata in DynamoDB and S3, enabling efficient analytics and
historical replay capabilities.
• Built automation scripts using Selenium WebDriver to validate UI-based data flows and regression
scenarios. Wrote comprehensive unit and integration tests with JUnit and Mockito, achieving 85%
test coverage across services.
           </ul>
          </ListItem>
        </List>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;