import React, { FC } from "react";
import {
   CheckboxGroupInput,
   Create,
   Datagrid,
   DateInput,
   DeleteButton,
   EditButton,
   List,
   ReferenceInput,
   SimpleForm,
   TextField,
   TextInput,
} from "react-admin";

const choices = [
   { id: "type1", name: "Type1" },
   { id: "type2", name: "Type2" },
   { id: "type3", name: "Type3" },
   { id: "type4", name: "Type4" },
];

const CommentsCreate: FC = (props) => {
   return (
      <Create title={"Create album"}>
         <SimpleForm>
            <ReferenceInput source="userId" reference="users" isRequired/>
            <TextInput source="id" required/>
            <TextInput source="title" required/>
            <CheckboxGroupInput source="type" choices={choices} />
            <DateInput label="Publish" source="publishedAt" />
         </SimpleForm>
      </Create>
   );
};

export default CommentsCreate;
