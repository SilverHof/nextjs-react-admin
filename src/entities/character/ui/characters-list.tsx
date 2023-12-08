import React, { FC } from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
} from "react-admin";

const CharactersList: FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="status" />
        <TextField source="species" />
        <TextField source="type" />
        <TextField source="gender" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default CharactersList;
