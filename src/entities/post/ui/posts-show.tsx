import React, { FC } from "react";
import {
  DateField,
   ReferenceField,
   Show,
   SimpleShowLayout,
   TextField,
} from "react-admin";

const PostsShow: FC = () => {
   return (
      <Show title={"Create album"}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <DateField label="Publication date" source="published_at" />
            <ReferenceField source="userId" reference="users" />
        </SimpleShowLayout>
      </Show>
   );
};

export default PostsShow;
