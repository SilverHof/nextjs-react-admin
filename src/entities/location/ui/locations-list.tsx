import React, { FC } from "react";
import {
   Datagrid,
   DeleteButton,
   EditButton,
   List,
   Pagination,
   SearchInput,
   ShowButton,
   TextField,
   TextInput,
} from "react-admin";


const LocationsList: FC = (props) => {
   return (
      <List {...props}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="dimension" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export default LocationsList;
