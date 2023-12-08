import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const CharactersEdit: FC = () => {
  return (
    <Edit title={"Edit album"}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="status" />
        <TextInput source="species" />
        <TextInput source="type" />
        <TextInput source="gender" />
      </SimpleForm>
    </Edit>
  );
};

export default CharactersEdit;
