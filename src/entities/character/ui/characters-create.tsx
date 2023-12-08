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

const CharactersCreate: FC = (props) => {

   return (
      <Create title={"Create post"}>
         <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="status" />
            <TextInput source="species" />
            <TextInput source="type" />
            <TextInput source="gender" />
            <CreateButton />
         </SimpleForm>
      </Create>
   );
};

export default CharactersCreate;
