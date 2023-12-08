import React, { FC } from "react";
import {
  DateField,
   DateInput,
   DeleteButton,
   EditButton,
   List,
   ReferenceField,
   RichTextField,
   Show,
   SimpleForm,
   SimpleShowLayout,
   TextField,
   TextInput,
} from "react-admin";

const TodosShow: FC = (props) => {
   return (
      <Show title={"Show todo"}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="completed" />
            <DateField label="Publication date" source="published_at" />
            <ReferenceField source="userId" reference="users"/>
        </SimpleShowLayout>
      </Show>
   );
};

export default TodosShow;
