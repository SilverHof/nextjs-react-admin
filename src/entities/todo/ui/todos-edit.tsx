import React, { FC } from "react";
import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const TodosEdit: FC = () => {
  return (
    <Edit title={"Edit album"}>
      <SimpleForm>
        <TextInput disabled source="userId" />
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="completed" />
      </SimpleForm>
    </Edit>
  );
};

export default TodosEdit