import React from "react";
import {
  Show,
  SimpleShowLayout,
  RichTextField,
  TextField,
  DateField,
} from "react-admin";
function PostShow(props) {
  return (
    <Show title="Edit Post" {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <RichTextField source="body" />
        <DateField label="Post date" source="publishedAt" />
      </SimpleShowLayout>
    </Show>
  );
}

export default PostShow;
