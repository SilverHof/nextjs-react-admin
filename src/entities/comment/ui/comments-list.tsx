import React, { FC } from "react";
import {
   Datagrid,
   DeleteButton,
   EditButton,
   List,
   Pagination,
   ShowButton,
   TextField,
} from "react-admin";

const CommentsPagination = () => (
   <Pagination rowsPerPageOptions={[25, 50, 100, 125]} />
);

const CommentsList: FC = (props) => {
   return (
      <List {...props} pagination={<CommentsPagination />}>
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

export default CommentsList;
