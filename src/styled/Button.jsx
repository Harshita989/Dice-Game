import styled from "styled-components";
export const Button = styled.button`
  display:flex;
  flex-direction:column;
  justify-content-center;
  align-items:center;
  padding:10px 18px;

Width:220px
height:44px;
background-color:black;
color:white;
border-radius:5px;
min-width:220px;
border:none;
border:2px solid transparent;
transition:0.4s background ease-in;
cursor:pointer;



&:hover{
background-color:white;
color:black;
border:2px solid black;
transition:0.3s background ease-in;
}
`;
