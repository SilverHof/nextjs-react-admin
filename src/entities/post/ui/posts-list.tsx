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

const postsFilters = [
   <SearchInput source="q" alwaysOn />,
   <TextInput label="User Id" source="userId" />,
   <TextInput label="Id" source="id" />,
   <TextInput label="Title" source="title" />,
   <TextInput label="Body" source="body" />,
];

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const PostsList: FC = (props) => {
   return (
      <List {...props} filters={postsFilters} pagination={<PostPagination />}>
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

export default PostsList;
