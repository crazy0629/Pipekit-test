import styled from "styled-components";

export const CustomButton = styled.div<{ btn_mode?: Boolean }>`
    width: 90px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    color: ${(props) => props.btn_mode ? "#000" : "#fff"};
    transition: all .2s ease-in-out;
    background: ${(props) => props.btn_mode ? "#fff" : "#000"};
    :hover {
        transform: scale(1.1, 1.1);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    div {
        font-size: 25px;
        padding: 20px 30px;
        border-bottom: 1px solid #c3c0c0;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PipeContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const CustomInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid #c3c0c0;
    padding: 20px 100px 15px;
    width: 30vw;
    margin: 0 0 15px;
`;

export const StructureContainer = styled.div`
    height: calc(100vh - 235px);
`;

export const StructureWrapper = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 18px;
    border: 1px solid #c3c0c0;
    overflow-y: scroll;
    max-height: calc(100vh - 270px);
`;