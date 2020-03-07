import styled from 'styled-components';

export const TimelineRouteCard = styled.div`
  background-color: #fff;
  margin: 30px auto;

  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug
  align-items: center;

  button {
    margin-right: 8px;
  }
`;

export const TimelineRouteDetail = styled.div`
  padding: 1rem 3.5rem;
  p;
`;
