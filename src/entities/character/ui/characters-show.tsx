import React, { FC } from "react";
import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const CharactersShow: FC = () => {
  return (
    <Show title={"Create album"}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="status" />
        <TextField source="species" />
        <TextField source="type" />
        <TextField source="gender" />
      </SimpleShowLayout>
    </Show>
  );
};

export default CharactersShow;
