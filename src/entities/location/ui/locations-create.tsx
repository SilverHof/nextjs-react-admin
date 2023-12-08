import React, { FC } from "react";
import {
   Create,
   CreateButton,
   Datagrid,
   DateInput,
   DeleteButton,
   EditButton,
   List,
   ReferenceInput,
   SimpleForm,
   TextField,
   TextInput,
   usePermissions,
} from "react-admin";

const LocationsCreate: FC = (props) => {

   return (
      <Create title={"Create post"}>
         <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="dimension" />
            <CreateButton />
         </SimpleForm>
      </Create>
   );
};

export default LocationsCreate;
