import React, { FC } from "react";
import {
   Datagrid,
   DeleteButton,
   EditButton,
   List,
   ShowButton,
   TextField,
} from "react-admin";

const AlbumsList: FC = (props) => {
  

   return (
      <List {...props}>
         <Datagrid>
            <TextField source="userId" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
         </Datagrid>
      </List>
   );
};

export default AlbumsList

