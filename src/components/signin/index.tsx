import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useForm, ErrorMessage } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import useSiginin from '../../hooks/signin/useSignIn'

const Wrap = styled.div`
  margin: 20px auto;
  width: 308px;
  text-align: center;
`

const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`

const SignInForm = styled.form`
  text-align: left;
  border: solid 1px #d8dee2;
  padding: 10px;
  border-radius: 5px;
  label,
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5px;
    line-height: 28px;
  }
  label {
    font-weight: bold;
  }
  input {
    border: solid 1px #d8dee2;
    padding: 0 5px;
  }
`

const SignInButton = styled.button`
  width: 100%;
  appearance: none;
  line-height: 28px;
  font-weight: bold;
  color: #eee;
  background-color: #2dba4e;
  border: solid 1px #2bb049;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`

const ErrorTxt = styled.p`
  color: red;
`

type SignInProps = {}

function SignIn(props: SignInProps) {
  const { register, handleSubmit, errors } = useForm()
  const [signInSubmit] = useSiginin()

  return (
    <>
      <Wrap>
        <Heading>Singn in to Wootalk</Heading>
        <SignInForm onSubmit={handleSubmit(signInSubmit)}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={register({
              required: 'This is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'This Input is email only',
              },
            })}
          />
          <ErrorMessage errors={errors} name="email">
            {({ message }) => <ErrorTxt>{message}</ErrorTxt>}
          </ErrorMessage>
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            ref={register({ required: true })}
          ></input>
          <ErrorMessage errors={errors} name="pwd" message="This is required">
            {({ message }) => <ErrorTxt>{message}</ErrorTxt>}
          </ErrorMessage>

          <SignInButton type="submit">Sign in</SignInButton>
        </SignInForm>
      </Wrap>
    </>
  )
}

export default SignIn
