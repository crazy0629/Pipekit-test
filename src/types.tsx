import { ReactNode } from "react";

export interface IFolder {
    name: String[];
    children: ReactNode;
}

export interface IFile {
    key: Number;
    name: String[];
}

export interface ITreeView {
    treeData: Object[];
}

export interface ITree {
    data: Object[];
    children?: ReactNode;
}
