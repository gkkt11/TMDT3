import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center; 
   justify-content: center; 
   text-align:center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
 
`;
const Title1 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Title2 = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: 0 auto;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
`;



const Contact = () => {
    return (
        <Container>
            <Title>CUSTOMER SERVICE
                <Desc>
                    We appreciate your time and strive to quickly and accurately provide answers to your questions. <br></br> <br></br>
                    If you would like to return your item(s) for refund via DHL pickup, you may fill up this form <br></br> <br></br> here and our support team will email you the relevant documents within 5 business days. <br></br> <br></br>
                    DHL will reach out to you within 2 days to arrange for a pickup date after you have received the label from adidas.<br></br> <br></br>
                    If you would like to return yourself, you may approach any DHL drop-off point to arrange a return (postage by customer) <br></br> <br></br> after receiving the return form from adidas, as we only accept returns via DHL at the moment.
                    
                </Desc>
            </Title>
          
            <Title1>ONLINE SHOP SUPPORT
                <Desc>For information regarding online orders or our Online Shop:</Desc>
            </Title1>

            <Title2>Newsletter</Title2>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                <Send />
                </Button>
            </InputContainer>
        </Container>
       
    )
}

export default Contact
