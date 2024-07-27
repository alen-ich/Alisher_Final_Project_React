import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, addTags } from "../../BLL/PostsSlice.js";

import "./styles.css";

export const AddPost = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const handleText = (e) => setText(e.target.value);
  const handleTag = (e) => setTags(e.target.value);

  const handleAdd = () => {
    if (text && tags) {
      dispatch(addTags(tags.split(", ")));
      dispatch(
        addPost({
          id: new Date().toISOString(),
          author: "Alisher S",
          tags: tags,
          quote: text,
        })
      );
    }
    setText("");
    setTags("");
  };

  return (
    <div className="add-post-wrapper">
      <p className="add-text">Add post</p>
      <div className="add-post-inner">
        <div className="input-area">
          <textarea
            type="text"
            placeholder="Write here"
            className="add-input-textarea"
            onChange={handleText}
            value={text}
            rows={3}
            cols={50}
          ></textarea>
          <input
            type="text"
            placeholder="#AddTags"
            className="add-input-inputarea"
            onChange={handleTag}
            value={tags}
          ></input>
        </div>

        <div className="add-btn" onClick={handleAdd}>
          Add post
        </div>
      </div>
    </div>
  );
};
