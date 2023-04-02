import React from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import Staffcards from "./Staffcards";
import Plans from "../StaffDashboard/Plans";
import SchoolFeeComp from "./SchoolFeeComp";

const Staffhome = () => {
  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Top>
          <Left>
            {/* <Bold>
              <div>All Expenses</div>
            </Bold> */}
          </Left>
        </Top>
        {/* <Staffcards />
        <Plans /> */}
        <SchoolFeeComp />
      </Wrapper>
    </Container>
  );
};

export default Staffhome;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  padding-bottom: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;
