import styled from "styled-components";

export const StyledTree = styled.div`
  line-height: 1.5;
`;
export const StyledFile = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  cursor: not-allowed;
  span {
    margin-left: 5px;
    font-size: 20px;
  }
`;
export const StyledFolder = styled.div`
  padding-left: 20px;
  font-size: 20px;
  padding: 10px 30px;
  cursor: pointer;
  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const Collapsible = styled.div<{ isOpen: Boolean }>`
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
`;
