import React, { Component } from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements'

class Signin extends Component {
    
    render(){
        return (
            <Container>
                <FormWrap>
                  <Icon to='/digmoney'>
                    <FormContent>
                        <Form action='#'>
                            <FormH1> Sign in </FormH1>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                  </Icon>    
                </FormWrap>    
            </Container>            
        )
    }
    }
    
export default Signin
