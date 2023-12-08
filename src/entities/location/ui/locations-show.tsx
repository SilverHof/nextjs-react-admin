import React, { FC } from "react";
import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const LocationsShow: FC = () => {
  return (
    <Show title={"Create album"}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <TextField source="dimension" />
      </SimpleShowLayout>
    </Show>
  );
};

export default LocationsShow;
