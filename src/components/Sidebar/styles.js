import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  height: 70px;
  margin-bottom: 10px;

  border-bottom: 1px solid #eee;

  input {
    width: 210px;
    height: 42px;
    margin-right: 10px;

    background: #eee;
    border-radius: 5px;
    padding: 20px;
    color: #777;
    font-size: 18px;

    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};
  }

  button {
    height: 42px;
    width: 42px;

    background: #59ea9a;
    border: 0;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #4dca85;
    }

    i {
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
