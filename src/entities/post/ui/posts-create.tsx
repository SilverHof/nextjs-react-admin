import React, { FC } from "react";
import {
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
   usePermissions,
} from "react-admin";

const PostsCreate: FC = (props) => {
   const { permissions } = usePermissions();

   return (
      <Create title={"Create post"}>
         <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <DateInput label="Publish" source="publishedAt" /> */}
            {permissions === "admin" ? (
               <>
                  <ReferenceInput source="userId" reference="users" />
                  <TextInput source="id" />
                  <TextInput source="title" />
                  <DateInput label="Publish" source="publishedAt" />
               </>
            ) : (
               <h1>You don't have permissions for creating a post</h1>
            )}
         </SimpleForm>
      </Create>
   );
};

export default PostsCreate;
