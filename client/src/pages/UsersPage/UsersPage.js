import React, { useEffect, useState } from 'react'
import './UsersPage.css'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import back3 from "../../assets/back3.jpg";
import edit from '../../assets/edit.png';
import { s } from "../../assets/stringfile";
import { CREATE_USER, GET_USER } from '../../redux/type/index'
import logo from "../../assets/logo.png";
import down from "../../assets/down-arrow.png";


const UsersPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [content, setContent] = useState(s);
  console.log(user);
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    useEffect(()=> {
      dispatch({type: GET_USER, user_name: params.user_name});
      createUser();
    },[])
    const createUser = () =>{
      console.log(user)
      if(user && !user?.isEdited) {
        dispatch({
          type: CREATE_USER,
          user: { user_name: params.user_name, content: s },

        });
      }
    } 

    useEffect(()=> {
      setContent(user?.content)
    },[user])
    console.log(user)
  return (
    <div className="container">
      <div className="content">
        <div className="left-content">
          <div className="left-content-container">
            <img src={logo} alt="logo" className="logo" />
            <div className="down-div">
              <img src={down} alt="down" className="up-down" />
            </div>
            <div
              className="left-content-text-content"
              dangerouslySetInnerHTML={{ __html: content ? content : s }}
            ></div>
            {user && !user.isEdited && (
              <div
                className="edit-section"
                onClick={() => navigate(`/${params.user_name}/editor`)}
              >
                <img src={edit} alt="edit" />
              </div>
            )}
            <img
              className="background-image left-image"
              src={back3}
              alt="background"
            />
          </div>
        </div>
        <div className="right-content">
          <div className="right-content-overlay"></div>
          <img className="background-image" src={back3} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default UsersPage