import styled from 'styled-components/macro'

export const SaveButton = styled.a`
  background-color: ${(p) => p.theme.primary};
  border: none;
  border-radius: 50px;
  color: #efefef;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 1rem;
  margin: 1rem auto;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15);
  transition: all 0.1s;

  &:hover {
    box-shadow: 0 2.5rem 3.5rem rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    &:active {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.175);
      transform: translateY(1px);
    }
  }
`
