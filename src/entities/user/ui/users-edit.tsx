import React, { FC } from "react";
import { Edit, TabbedForm, TextInput } from "react-admin";

const UsersEdit: FC = () => {
  return (
    <Edit title={"Edit album"}>
          <TabbedForm>
            <TabbedForm.Tab label={"Info"}>
                <TextInput source="id"/>
                <TextInput source="name"/>
                <TextInput source="username"/>
                <TextInput source="email"/>
                <TextInput source="phone"/>
                <TextInput source="website"/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label={"Address"}>
                <TextInput source="address.street"/>
                <TextInput source="address.suite"/>
                <TextInput source="address.city"/>
                <TextInput source="address.zipcode"/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label={"Company"}>
                <TextInput source="company.name"/>
                <TextInput source="company.catchPhrase"/>
                <TextInput source="company.bs"/>
            </TabbedForm.Tab>
          </TabbedForm>
    </Edit>
  );
};

export default UsersEdit