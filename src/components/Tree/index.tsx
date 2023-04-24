import React from "react";
import { useState } from "react";

import {
  Collapsible,
  StyledFile,
  StyledFolder,
  StyledTree,
} from "./tree.style";
import { IFolder, IFile, ITreeView, ITree } from "src/types";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import folderIcon from "assets/folder-icon.svg";
import fileIcon from "assets/file-icon.svg";

const File = ({ name }: IFile) => {
  return (
    <StyledFile>
      <img src={fileIcon} alt="folder icon" />
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }: IFolder) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        {!isOpen ? <IoIosArrowForward /> : <IoIosArrowDown />}

        <img src={folderIcon} alt="folder icon" />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }: any) => {
  return data.map((item: any, key: number) => {
    if (item[Object.keys(data[key])[0]].__children.length > 0) {
      return (
        <Folder key={key} name={Object.keys(data[key])}>
          <TreeRecursive data={item[Object.keys(data[key])[0]].__children} />
        </Folder>
      );
    } else {
      return <File key={key} name={Object.keys(data[key])} />;
    }
  });
};
const Tree = ({ data, children }: ITree) => {
  const isImparative = data && !children;

  return (
    <StyledTree>
      {isImparative ? <TreeRecursive data={data} /> : children}
    </StyledTree>
  );
};

Tree.File = File;
Tree.Folder = Folder;

const TreeView = ({ treeData }: ITreeView) => {
  return (
    treeData && (
      <div className="App">
        <Tree data={treeData} />
      </div>
    )
  );
};
export default TreeView;
