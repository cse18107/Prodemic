import React, {useRef, useState} from 'react';
import './UserEdit.css'
import JoditEditor from "jodit-react";
import { s } from "../../assets/stringfile";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EDIT_USER } from '../../redux/type';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";

const UserEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  	const editor = useRef(null);
    const [content, setContent] = useState(s);
    const [copyState, setcopyState] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const text = `https://prodemic.onrender.com/${params.user_name}`;

    const saveHandler = () => {
      dispatch({type: EDIT_USER, user: {user_name: params.user_name, content}});
          messageApi.open({
            type: "success",
            content:
              "Content saved successfully. Now copy the link",
            duration: 5,
          });
    }

    const handleCopy = () => {
        setcopyState(true);
          messageApi.open({
            type: "success",
            content:
              "Link copied",
            duration: 5,
          });
    }
  return (
    <div className="edit-content">
      {contextHolder}
      <div style={{"display":"flex"}}>
        <button className="save" onClick={saveHandler}>
          Save
        </button>
        {/* <button className="share">Share</button> */}
        <CopyToClipboard text={text} onCopy={() => handleCopy()}>
          {/* single child to which event is applied*/}

          <div className="copy-area">
            {/*button to copy text */}
            <button variant="contained" className="share">
              Click to Copy
            </button>
          </div>
        </CopyToClipboard>
        <button
          className="back"
          onClick={() => navigate(`/${params.user_name}`)}
        >
          Back
        </button>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
}

export default UserEdit