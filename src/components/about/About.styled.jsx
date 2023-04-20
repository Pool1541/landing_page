import styled from "styled-components";

export const StyledAbout = styled.div``;

export const SubtitleContaiener = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 430px) {
    height: 150px;
    align-items: flex-start;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 30px;
  row-gap: 50px;
  justify-content: space-around;
  position: relative;
  z-index: 10;
`;

export const AboutBackground = styled.div`
  position: absolute;
  user-select: none;
  right: 0;
  top: -180px;
  z-index: 1;
`;
