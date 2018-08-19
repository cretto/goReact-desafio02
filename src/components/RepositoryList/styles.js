import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Repository = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
  cursor: pointer;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #888;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    strong {
      font-size: 18px;
    }

    span {
      font-size: 12px;
      font-weight: bold;
      color: #ccc;
    }
  }

  img {
    width: 45px;
    height: 45px;
  }
`;
