import styled from 'styled-components';



export const FatherContainer = styled.div`
text-align: center;
height:100vh;
display: flex;
flex-flow: column wrap;
align-items: center;
color:white;
background:  linear-gradient(#3CBA92, #1F604B)
`;

export const AppDescription = styled.p`
font-family: Assistant;
padding: 0px 40px 0 40px;
line-height: 2;
font-size:24px;
@media (max-width: 650px) {
  font-size: 20px;
}

`;


export const BContainer = styled.div`
margin: auto;
width:100%;
height:30%;
`;


export const Span = styled.span`
margin:20px 0px 0px 20px;
display:block;
`;
