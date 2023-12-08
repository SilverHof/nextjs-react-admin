import React, { useEffect } from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, ListGuesser, Resource } from "react-admin";

import Dashboard from "@/entities/dashboard/ui/dashboard";

import AlbumIcon from "@mui/icons-material/PhotoAlbum";
import AlbumsList from "@/entities/album/ui/albums-list";
import AlbumsCreate from "@/entities/album/ui/albums-create";
import AlbumsEdit from "@/entities/album/ui/albums-edit";
import AlbumsShow from "@/entities/album/ui/albums-show";
import PostIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import UserIcon from "@mui/icons-material/People";
import TodoIcon from "@mui/icons-material/CheckBox";
import LocationIcon from "@mui/icons-material/LocationCity";
import CharacterIcon from "@mui/icons-material/PeopleAlt";
import authProvider from "@/authProvider";
import UsersList from "@/entities/user/ui/users-list";
import UsersShow from "@/entities/user/ui/users-show";
import UsersEdit from "@/entities/user/ui/users-edit";
import UsersCreate from "@/entities/user/ui/users-create";
import PostsList from "@/entities/post/ui/posts-list";
import PostsShow from "@/entities/post/ui/posts-show";
import PostsCreate from "@/entities/post/ui/posts-create";
import PostsEdit from "@/entities/post/ui/posts-edit";
import CommentsList from "@/entities/comment/ui/comments-list";
import CommentsCreate from "@/entities/comment/ui/comments-create";
import CommentsEdit from "@/entities/comment/ui/comments-edit";
import CommentsShow from "@/entities/comment/ui/comments-show";
import AdminLayout from "../custom-layout";
import TodosList from "@/entities/todo/ui/todos-list";
import TodosCreate from "@/entities/todo/ui/todos-create";
import TodosEdit from "@/entities/todo/ui/todos-edit";
import TodosShow from "@/entities/todo/ui/todos-show";
import dataProviderCustom from "@/dataProviderCustom";

import simpleRestProvider from "ra-data-simple-rest";
import LocationsList from "@/entities/location/ui/locations-list";
import LocationsCreate from "@/entities/location/ui/locations-create";
import LocationsShow from "@/entities/location/ui/locations-show";
import LocationsEdit from "@/entities/location/ui/locations-edit";
import CharactersList from "@/entities/character/ui/characters-list";
import CharactersCreate from "@/entities/character/ui/characters-create";
import CharactersEdit from "@/entities/character/ui/characters-edit";
import CharactersShow from "@/entities/character/ui/characters-show";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  // useEffect(() => {
  //    const some = dataProvider.getOne("posts", { id: 12})
  // })con
  // const some = dataProvider.getOne("posts", { id: 12})
  // console.log("some", some);

  // dataProviderCustom.getOne("location", { id: 12 }).then((data) => {
  //    console.log("get one", data);
  // });

  // dataProviderCustom
  //    .getList("location")
  //    .then((data) => {
  //       console.log("get list", data);
  //    });

  return (
    <Admin
      layout={AdminLayout}
      dataProvider={dataProviderCustom}
      // dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="location"
        icon={LocationIcon}
        list={LocationsList}
        create={LocationsCreate}
        edit={LocationsEdit}
        show={LocationsShow}
      />
      <Resource
        name="character"
        icon={CharacterIcon}
        list={CharactersList}
        create={CharactersCreate}
        edit={CharactersEdit}
        show={CharactersShow}
      />
      {/* <Resource
            name="users"
            icon={UserIcon}
            list={UsersList}
            create={UsersCreate}
            edit={UsersEdit}
            show={UsersShow}
            recordRepresentation={(record) => `${record.name}`}
         />
         <Resource
            name="posts"
            icon={PostIcon}
            list={PostsList}
            create={PostsCreate}
            edit={PostsEdit}
            show={PostsShow}
         />
         <Resource
            name="albums"
            icon={AlbumIcon}
            list={AlbumsList}
            create={AlbumsCreate}
            edit={AlbumsEdit}
            show={AlbumsShow}
            recordRepresentation={(record) => `${record.name}`}
         />
         <Resource
            name="comments"
            icon={CommentIcon}
            list={CommentsList}
            create={CommentsCreate}
            edit={CommentsEdit}
            show={CommentsShow}
         />
         <Resource
            name="todos"
            icon={TodoIcon}
            list={TodosList}
            create={TodosCreate}
            edit={TodosEdit}
            show={TodosShow}
         /> */}
    </Admin>
  );
};

export default App;
