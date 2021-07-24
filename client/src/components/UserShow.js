import React from "react";
import { Show, SimpleShowLayout, RichTextField, TextField } from "react-admin";
function UserShow(props) {
  return (
    <Show title="User" {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <RichTextField source="email" />
      </SimpleShowLayout>
    </Show>
  );
}

export default UserShow;
