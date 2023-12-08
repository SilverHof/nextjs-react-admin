import React, { FC } from "react";
import {
   Create,
   DateInput,
   EmailField,
   ImageInput,
   PasswordInput,
   SelectInput,
   SimpleForm,
   TextInput,
} from "react-admin";

const choices = [
   { id: "male", name: "male" },
   { id: "female", name: "female" },
];

const UsersCreate: FC = () => {
   const transfrom = (data: any) => ({
      ...data,
      // firstname: data.firstname,
      // lastname: data.lastname,
   });

   return (
      <Create title={"Create user"} transform={transfrom}>
         <SimpleForm>
            <TextInput source="userId" />
            <TextInput source="id" />
            <TextInput source="firstname" label="First Name" />
            <TextInput source="lastname" label="Last Name" />
            <EmailField source="email" label="Email" />
            <PasswordInput source="password" />
            <SelectInput source="sex" choices={choices} />
            <ImageInput source="avatar" label="Avatar" />
            <DateInput label="Publish" source="publishedAt" />
         </SimpleForm>
      </Create>
   );
};

export default UsersCreate;
