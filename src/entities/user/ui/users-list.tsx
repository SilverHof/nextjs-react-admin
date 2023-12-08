import React, { FC } from "react";
import {
   Datagrid,
   DeleteButton,
   EditButton,
   FunctionField,
   List,
   SearchInput,
   ShowButton,
   TextField,
   TextInput,
   UrlField,
} from "react-admin";

const usersFilters = [
   <SearchInput source="q" alwaysOn />,
   <TextInput label="Id" source="id" />,
   <TextInput label="Name" source="name" />,
   <TextInput label="Username" source="username" />,
   <TextInput label="City" source="address.city" />,
];

const UsersList: FC = (props) => {
   return (
      <List {...props} filters={usersFilters}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <FunctionField
               label="Address"
               render={(record: any) =>
                  `City: ${record.address.city} Street: ${record.address.street}`
               }
            />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export default UsersList;
