import React from "react";
import styled from "styled-components";
import { TbSchool } from "react-icons/tb";

const SchoolFeeComp = () => {
  return (
    <Container>
      <HeroComp>
        <HeroCompHold>
          <IconHold>
            <TbSchool />
          </IconHold>
          <TextHold>
            <Title>School Fee</Title>
            <Content>
              Every dollar you're able to set aside for your children's future
              can get them closer to financial security as they get older. There
              are a number of ways to begin building that nest egg, including:
              Open a savings account. Traditional savings accounts offer a
              tried-and-true way to store money
            </Content>
          </TextHold>
        </HeroCompHold>
      </HeroComp>
      <HeroBtn>Start Plan</HeroBtn>
    </Container>
  );
};

export default SchoolFeeComp;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const HeroComp = styled.div`
  width: 90%;
  height: 250px;
  background-color: #81007f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HeroCompHold = styled.div`
  width: 85%;
  color: #fff;
  font-family: Montserrat;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconHold = styled.div`
  font-size: 200px;
  display: flex;
  align-items: center;
`;
const TextHold = styled.div`
  width: 500px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Content = styled.div`
  font-size: 15px;
`;

const HeroBtn = styled.button`
  width: 90%;
  height: 35px;
  background-color: transparent;
  border: 1px solid #81007f;
  color: #81007f;
  outline: none;
  font-family: Montserrat;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
`;
