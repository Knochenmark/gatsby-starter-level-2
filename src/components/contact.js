import styled from '@emotion/styled';
import React from 'react';
import Address from '../assets/address.svg';
import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';
import { StyledHeading } from './_shared/styled-heading';
import { StyledSection } from './_shared/styled-section';

const StyledContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  & > svg {
    width: 2rem;
    height: 2rem;
    fill: var(--body-color);
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  & > span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--link-color);

  font-weight: normal;
`;
const StyledText = styled.p`
  margin-top: 25px;
  margin-left: 3px;
  width: 50%;
  max-width: 500px;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 60%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Contact = ({ data }) => {
  const { phone, email, address, text } = data.siteMetadata.contact;

  return (
    <React.Fragment>
      <StyledSection id="contact">
        <StyledHeading>Contact Details</StyledHeading>
        {text && <StyledText>{text}</StyledText>}
        <StyledSeparator />
        <StyledContacts>
          {phone && (
            <StyledContainer>
              <Phone />
              <StyledFormContainer>
                <StyledForm>Phone Number</StyledForm>
                <span>{phone}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {email && (
            <StyledContainer>
              <Email />
              <StyledFormContainer>
                <StyledForm>My E-Mail</StyledForm>
                <span>{email}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {address && (
            <StyledContainer>
              <Address />
              <StyledFormContainer>
                <StyledForm>Office Location</StyledForm>
                <span>{address}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledSection>
    </React.Fragment>
  );
};

export default Contact;
