import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgWrapper = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 500rem;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 160px;
  height: 160px;
  margin-bottom: 1em;
`;

export const Box = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  background: white;
  border: 1px solid var(--border-color);
  flex: 0 0 250px;
  padding: 2em;
  margin: 0 1em 1em 0;
  
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 1.4em;
  margin: 0;
  color: var(--text-color);
`;
