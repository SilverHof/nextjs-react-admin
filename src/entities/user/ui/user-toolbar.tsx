import { SortButton, Toolbar } from "react-admin";

export const UsersToolbar = () => {
   return (
      <Toolbar>
         <SortButton fields={["reference", "sales", "stock"]} />
      </Toolbar>
   );
};
