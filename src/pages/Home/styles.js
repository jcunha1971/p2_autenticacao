import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;



export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Carousel = styled.div`
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }

  .carousel-image {
    max-width: 300px;
    margin: auto;
  }
`;

