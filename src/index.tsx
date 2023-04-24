import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { render } from "react-dom";
import TreeView from "components/Tree";
import { ColorRing } from "react-loader-spinner";
import { CustomButton, ButtonContainer, Title, InputContainer, PipeContainer, CustomInput, StructureContainer, StructureWrapper } from "./style"

const baseURL = "http://localhost:3000/api/v1/parsedhtml/?url=";

const App = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [treeData, setTreeData] = useState([]);
  const onSubmit = async () => {
    if (link) {
      setLoading(true);
      const data = await fetch(baseURL + link);
      const jsonData = await data.json();
      if (jsonData.code == 'ENOTFOUND' || jsonData.code == 'ECONNREFUSED') {
        alert("Please input valid url!");
        setLoading(false);
        return;
      }
      setTreeData(jsonData.html.__children);
      setLoading(false);
    } else {
      alert("Please input the link!");
    }
  };
  const onClear = async () => {
    setTreeData([]);
    setLink("");
    setLoading(false);
  };

  return (
    <PipeContainer>
      <StructureContainer>
        <StructureWrapper>
          <Title>
            <div>HTML Folder Structure</div>
          </Title>
          <TreeView treeData={treeData} />
        </StructureWrapper>
      </StructureContainer>
      <InputContainer>
        <Title>Input</Title>
        <CustomInput
          type="text"
          placeholder="Please input URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <ButtonContainer>
          <CustomButton onClick={onClear} btn_mode={true}>
            Clear
          </CustomButton>
          <CustomButton onClick={onSubmit}>
            {loading ? (
              <ColorRing height="30" width="30" ariaLabel="loading" />
            ) : (
              "Submit"
            )}
          </CustomButton>
        </ButtonContainer>
      </InputContainer>
    </PipeContainer>
  );
};

const HotApp = hot(App);

const root = document.getElementById("root") as HTMLElement;
render(<HotApp />, root);
