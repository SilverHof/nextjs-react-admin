import React, { FC } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

const LocationsEdit: FC = () => {
  return (
    <Edit title={"Edit album"}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="type" />
        <TextInput source="dimension" />
      </SimpleForm>
    </Edit>
  );
};

export default LocationsEdit;
