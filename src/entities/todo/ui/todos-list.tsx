import React, { FC } from "react";
import {
   ListBase,
   Toolbar,
   useDataProvider,
   useListContext,
} from "react-admin";

const TodoList = () => {
   const { data } = useListContext();

   return (
      <div className="flex flex-col">
         {data?.map((item: any, index) => {
            return (
               <div className="" key={index}>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.completed}</p>
               </div>
            );
         })}
      </div>
   );
};

const TodosPagination = () => {
   const { page, setPage, total } = useListContext();

   return (
      <Toolbar>
         <div className="flex justify-center items-center gap-6">
            {page > 1 && (
               <button onClick={() => setPage(page - 1)}>Previous page</button>
            )}
            {page < total / 10 && (
               <button onClick={() => setPage(page + 1)}>Next page</button>
            )}
         </div>
      </Toolbar>
   );
};

const TodosList: FC = (props) => {
   const dataProvider = useDataProvider();

   dataProvider.getOne("todos", { id: 12 }).then((todo) => {
      console.log("todo", todo);
   });

   return (
      <ListBase {...props}>
         <TodoList />
         <TodosPagination />
      </ListBase>
   );
};

export default TodosList;
