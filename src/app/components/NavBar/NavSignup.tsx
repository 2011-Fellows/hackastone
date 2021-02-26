import * as React from 'react'
import styled from 'styled-components/macro'

export function NavSignup() {
  return (
    <Wrapper>
      <Item href="/">Sign Up</Item>
      <LoginButton>
        <Item href="/">Log In</Item>
      </LoginButton>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`

const Item = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
font: Roboto;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`
const LoginButton = styled.button`
  background: #5bc0be;
  border-radius: 5px;
  border: none;
`
