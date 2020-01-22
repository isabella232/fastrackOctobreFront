import styled from '@emotion/styled';

// Button, Input, InputFile, Select, Label

export const Button = styled.button`
  text-align: center;
  padding: 0.75rem 3rem;
  width: 70%;
  cursor: pointer;
  background-color: #2F3640;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  margin-top: 1.5rem;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover{
    background-color: #fff;
    color: #2F3640;
  }
`;

export const Input = styled.input`
  padding: 0.4rem 1rem;
  border-radius: 15px;
  margin-left: 0.5rem;
  color: #2F3640;
  font-weight: 400;
  font-size: 0.8rem;
  width: 70%;
  border: 2px solid #2F3640;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Select = styled.select`
display: block;
font-weight: 400;
color: #757575;
line-height: 1;
border: none;
padding: 0.5rem 1rem;
width: 70%;
margin: 0;
border-radius: 15px;
appearance: none;
background-color: #fff;
font-size: 0.8rem;
border: 2px solid #2F3640;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 90px;
  margin: 1rem 0;
  border: 3px solid #2F3640;
  opacity: 1;
  background-color: #DFE4EA;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-property: transform, background-color;
  &:hover{
    transform: scale(1.07);
    background-color: #fff;
  }
`;