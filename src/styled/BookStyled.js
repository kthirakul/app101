import styled from "styled-components";

export const WrapAdmin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const WrapAuto = styled.div`
  overflow: auto;
`;

export const SHeaderAdmin = styled.div`
  justify-content: space-between;
  display: flex;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 12px;
`;

export const TAdmin = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const SInputAdmin = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 6px;
  font-family: "Kanit", sans-serif;

  ::placeholder {
    font-size: 16px;
    font-family: "Kanit", sans-serif;
  }
`;

export const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: white;
  border-radius: 99px;
`;

export const BookSettingHead = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const WrapBookSetting = styled.div`
  padding: 12px 12px 20px 12px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const WrapChooseSetting = styled.div`
  padding-left: 12px;
  margin-top: 12px;
`;

export const InputSet = styled.input`
  border: none;
  outline: none;
  border-radius: 12px;
  width: ${props => (props.contact === "true" ? "300px" : "40px")};
  text-align: ${props => !props.contact && "center"};
  padding: 6px 0 6px ${props => (props.contact ? "8px" : "14px")};
  background: rgba(255, 255, 255, 0.8);
  font-family: "Kanit", sans-serif;
  margin-right: 8px;
  :focus {
    box-shadow: 0 0 0 2pt #938fff;
  }
`;

export const ItemSet = styled.div`
  background: rgba(0, 0, 0, 0.075);
  border-radius: 99px;
  padding: 6px 10px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

export const SaveReqSet = styled.div`
  width: 75px;
  padding: 8px 0;
  background: ${props =>
    props.save ? "#aa00ff" : props.start ? "#bfb217" : "#ff4081"};
  border-radius: 12px;
  color: white;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props =>
    props.checked === 1 || props.checked === undefined ? "pointer" : "default"};
  transition: 0.125s;
  :hover {
    background: ${props =>
      props.save ? "#9a07e4" : props.start ? "#a69b13" : "#e23471"};
  }
  opacity: ${props => props.checked === 0 && 0.2};
`;

export const WrapSaveReqSet = styled.div`
  display: flex;
`;

export const ErrorReqSet = styled.span`
  color: #820b0b;
  font-style: italic;
  margin-left: 8px;
`;

export const TextReqSet = styled.span`
  width: ${props => (props.up ? "131px" : "98px")};
`;
