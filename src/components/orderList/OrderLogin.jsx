import React, { useState , useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 8em;
`;

function Login(props) {
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [infoType, setInfoType] = useState("전화 번호");

    const onClick = () =>{
      const formData = new FormData();
      formData.append("userId", id);
      if(infoType == "전화 번호"){
        formData.append("name", document.getElementById("ip_name"));
        formData.append("phoneNum", document.getElementById("ip_phone"));
      }else{
        formData.append("orderNum", document.getElementById("ip_order"));
      }
      axios({
        method: "post",
        url: 'http://localhost:8090/shop-backend/user/getOrderHistory',
        data: formData
      })
      .then(function (response){
        //handle success
        if(response.data !== "false"){

        }else{
          navigate('./orderList', {
            state: {
              list: response.data
            }
          });
        }

      })
      .catch(function(error){
        //handle error
      })
      .then(function(){
        // always executed
      });
    }

    const changeType = (e) =>{
      setInfoType(e.target.value);
    }

    return (
        <Wrapper>
          <div className="grid_t" style={{margin: "30px"}}>
            <div className="gr-12">
              <select className="select-orderLogin" onChange={changeType}>
                <option key="phoneNum" value="전화 번호" > 전화 번호</option>
                <option key="orderNum" value="주문 번호"> 주문 번호</option>
              </select>
            </div>

            {
              infoType == "주문 번호" ?
              (<>
                <div className="gr-3 calign">
                  <h3 style={{paddingTop:"20px"}}> 주문 번호 </h3>
                </div>
                <div className="gr-9">
                  <input type="text" id="ip_order" value={id} onChange={(e) =>setId(e.target.value)}/>
                </div>
              </>)
              :
              (<>
                <div className="gr-3 calign">
                  <h3 style={{paddingTop:"20px"}}> 전화 번호</h3>
                </div>
                <div className="gr-9">
                  <input type="text" id="ip_phone" value={id} onChange={(e) =>setId(e.target.value)}/>
                </div>
                <div className="gr-3 calign">
                  <h3 style={{paddingTop:"20px"}}> 이 름 </h3>
                </div>
                <div className="gr-9">
                  <input type="text" id="ip_name" value={id} onChange={(e) =>setId(e.target.value)}/>
                </div>
              </>)
            }


            <div className="gr-12 calign mt1 mr1">
              <button onClick={onClick}> 조회하기 </button>
            </div>

          </div>
        </Wrapper>
    );
}

export default Login;