import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams ,useLocation} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import EmojiPicker from 'emoji-picker-react';
import Modal from 'react-bootstrap/Modal';
import queryString from 'query-string';

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Quill 에디터 스타일시트
import ImageUploader from 'quill-image-uploader'
import Quill from 'quill';

Quill.register('modules/imageUploader', ImageUploader);

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;


function AdminContent(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const numberRef = useRef(1);
  const productId = location.state.productId;
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const [relandering, setRelangering] = useState();

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  useEffect(() => {
      axios({
        method: "get",
        url: 'http://localhost:8090/shop-backend/product/select/id/'+productId
      })
      .then(function (response){
        //handle success
        setProduct(response.data);
      })
      .catch(function(error){
        //handle error
        console.log(error);
      });
    },[]); //마지막에 아무 파라미터를 안넣어줌으로써 페이지가 처음 로드 될 때만 적용





  const changeName = (e) =>{
    let content = e.target.value;
    let id = productId;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("content", content);

    axios({
      method: "post",
      url: 'http://localhost:8090/shop-backend/product/changeName',
      data: formData
    })
    .then(function (response){
      //handle success
      setRelangering("");
    })
    .catch(function(error){
      //handle error
      console.log(error);
    })
    .then(function(){
      // always executed
    });
  }

  const changePrice = (e) =>{
    let content = e.target.value;
    let id = productId;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("content", content);

    axios({
      method: "post",
      url: 'http://localhost:8090/shop-backend/product/changePrice',
      data: formData
    })
    .then(function (response){
      //handle success
      setRelangering("");
    })
    .catch(function(error){
      //handle error
      console.log(error);
    })
    .then(function(){
      // always executed
    });
  }


  const changeDetail = (e) =>{
    let content = e;
    let id = productId;

    const formData = new FormData();
    formData.append("id", id);
    formData.append("content", content);

    axios({
      method: "post",
      url: 'http://localhost:8090/shop-backend/product/changeDetail',
      data: formData
    })
    .then(function (response){
      //handle success
      setProduct(response.data);
      setRelangering("");
    })
    .catch(function(error){
      //handle error
      console.log(error);
    })
    .then(function(){
      // always executed
    });
  }

  const pickEmo = (e) => {
    console.log(e.emoji);
    document.getElementById("contentArea").innerHTML = document.getElementById("contentArea").innerHTML+ e.emoji;
    handleClose();
  }

  const makeContent= (e) => {
    e = e.replace(/&lt;/g, "<");
    e = e.replace(/&gt;/g, ">");
    e = e.replace(/<br>/g, "\n");
    e = e.replace(/&nbsp;/g, " ");
    return e;
  }


   const quillModules = {
     toolbar: {
       container: [
         [{ header: [1, 2, false] }],
         ['bold', 'italic', 'underline'],
         [{ 'color': [] }, { 'background': [] }],
         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
         [{ 'align': [] }],
         ['link', 'image']
       ]
     },
     imageUploader: {

     }
   }



  return (
    <Wrapper>
      <div className="detail_main" id="main">
        <div className="inner">
          <input type="text" className="ip-admin-content-head" defaultValue={product == undefined ? "":product.name} onChange={changeName}></input>
          <div className="row detail_main_nav">

            <div className="col-12-medium" id="imgDiv">
              <span className="image main detail_span_img"><img className="detail_img" src={"../images/product"+productId+".jpg"} alt="" /></span>
            </div>

            <div className="col-12-medium calign grid_t" name="selectDiv" style={{paddingTop: "10%"}}>
              <div className="gr-6 mt2">
                  <span>판매 가격: </span>
              </div>
              <div className="gr-6 mt2">
                  <input type="text" className="ip-admin-content-info" defaultValue={product == undefined ? "":product.price} onChange={changePrice}></input>
              </div>

              <div className="gr-6 mt2">
                  <span>배송 예정일 : </span>
              </div>
              <div className="gr-6 mt2">
                  <input type="text" className="ip-admin-content-info" defaultValue={product == undefined ? "":product.deliveryTime}></input>
              </div>

              <div className="gr-12 mb1">
                <select id="select_color" defaultValue="">
                  <option value="" disabled className="option_select">Color</option>
                  <option value="Green" className="option_select">Green</option>
                  <option value="Blue" className="option_select">Blue</option>
                  <option value="Yellow" className="option_select">Yellow</option>
                </select>
              </div>

            </div>

          </div>
          {product && <div style={{textAlign: "center"}} id="contentArea" dangerouslySetInnerHTML={{__html: product.detail}} />}

          <ReactQuill
            value={product?.detail || ''}
            modules={quillModules}
            onChange={(content, delta, source, editor) => changeDetail(editor.getHTML())}
            theme="snow"
          />

        </div>
      </div>
    </Wrapper>
  );
}

export default AdminContent;
