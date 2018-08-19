import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100%;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  background: #fff;
  padding: 30px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.15);

  select {
    height: 42px;
    width: 210px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0 15px;
    color: #777;
    font-size: 18px;
  }
`;

export const Repository = styled.div`
  display: flex;

  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      margin-top: 3px;
      font-size: 12px;
      font-weight: bold;
      color: #888;
    }
  }
`;

export const Issues = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Issue = styled.li`
  background: #fff;
  padding: 20px;
  margin: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  display: flex;

  &:nth-child(3n-1) {
    margin-left: 0;
    margin-right: 0;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 20px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 260px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    color: #888;
    margin-top: 5px;
  }

  button {
    background: #b286d1;
    border: 0;
    margin-top: 10px;
    width: 150px;
    height: 30px;
    border-radius: 3px;
    color: #fff;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: baseline;
    justify-content: center;

    i {
      margin-right: 5px;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  i {
    font-size: 50px;
    color: #ccc;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  p {
    color: #ccc;
    font-size: 30px;
  }
`;
