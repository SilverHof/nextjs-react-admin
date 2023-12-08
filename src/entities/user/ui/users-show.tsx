import React, { FC } from "react";
import {
   Show,
   SimpleShowLayout,
   TabbedShowLayout,
   TextField,
   UrlField,
   useRecordContext,
} from "react-admin";

const UserAddress = () => {
  const record = useRecordContext()
  if (!record) return null
  
  return (
    <div className="flex flex-col gap-4">
      <span>User's custom field</span>
      <span>{record.address.city}</span>
      <span>{record.address.street}</span>
      <span>{record.address.zipcode}</span>
    </div>
  )
}

const UsersShow: FC = () => {

   return (
      <Show title={"Show user"}>
         <SimpleShowLayout>
            <TabbedShowLayout>
               <TabbedShowLayout.Tab label={"Info"}>
                  <TextField source="id" />
                  <TextField source="name" />
                  <TextField source="username" />
                  <TextField source="email" />
                  <TextField source="phone" />
                  <UrlField source="website" />
               </TabbedShowLayout.Tab>
               <TabbedShowLayout.Tab label={"Address"}>
                  <UserAddress />
                  <TextField source="address.street" />
                  <TextField source="address.suite" />
                  <TextField source="address.city" />
                  <TextField source="address.zipcode" />
               </TabbedShowLayout.Tab>
               <TabbedShowLayout.Tab label={"Company"}>
                  <TextField source="company.name" />
                  <TextField source="company.catchPhrase" />
                  <TextField source="company.bs" />
               </TabbedShowLayout.Tab>
            </TabbedShowLayout>
         </SimpleShowLayout>
      </Show>
   );
};

export default UsersShow;
