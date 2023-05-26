import React from 'react'
import logo from '../../Help/Images/doc_logo.jpg'
import { PopupMenu } from "react-simple-widgets";
import avater from '../../Help/Images/avater.png'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { Badge, message } from "antd";
import { BiCog } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";

const UserProfileDrop = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };
  return (

    <div className=' flex '>


      <div className='mr-6' >
        <Badge style={{cursor:'pointer'}}  count={user && user.notifcation.length} onClick={()=> {navigate('/notification')}}>
          <i className="fa-solid fa-bell"></i>
          <AiOutlineBell style={{ color: '#fff',fontSize:'28px',fontWeight:'bold',marginTop:'-15px' }}  />
        </Badge>

      </div>
      <h6 className='text-white mr-3 mt-1'>{user?.name}</h6>
      <div className="text-end">
        <PopupMenu>
          <span className="  cursor-pointer ">
            {/* <small>Profile</small> */}
            <img loading='lazy' className="w-[30px] h-[30px] mr-0 rounded-full" src={avater} alt="Rounded avatar" />
          </span>

          <div className="w-[250px] text-start">
            <div className="card-body bg-white border-[1px] border-slate-300 p-5 rounded-[4px] px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4 grid w-[100px] h-[100px] rounded-[50px] bg-yellow-400 place-items-center">
                <span>K</span>
              </div>

              <h5 className="text-center font-bold mb-0">Name: {user?.name}</h5>
              <p className="text-center font-bold mb-2">Email: {user?.email}</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>

              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <small onClick={handleLogout}>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  )
}

export default UserProfileDrop