import React from 'react'
import Layout from '../Components/Layout'
import { Tabs, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading , hideLoading } from '../redux/features/alertSlice'
import axios  from 'axios';
import {  useNavigate } from 'react-router-dom'
const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector(state=> state.user);
  // handle read notification.....
  const handleMerkAllRead = async () => {
    try {
       dispatch(showLoading());
       const res = await axios.post("/api/v1/user/get-all-notification",{
        userId:user._id
      },
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
       dispatch(hideLoading);
       if(res.data.success){
        message.success(res);
       }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error)
      message.error('something want wrong')
    }
  }
  const handleDeleteAllRead = () => {

  }
  return (
    <Layout>
        <h1 className=' p-3 text-center'> notifcation</h1>
        <Tabs>
          <Tabs.TabPane tab='unRead' key={0}>
            <div className='flex justify-end'>
              <h1 className='p-2 cursor-pointer' onClick={handleMerkAllRead}>
                Mark All Read
              </h1>
            </div>
            {
              user?.notifcation.map(notificationMessage => (
                 <div className='card cursor-pointer' onClick={()=>navigate(notificationMessage.onClickPath)} >
                    <div className='card-text'>
                      {notificationMessage.message}
                    </div>
                 </div>
              ))
            }
          </Tabs.TabPane>
          <Tabs.TabPane tab='Read' key={1}>
            <div className='flex justify-end'>
              <h1 className='p-2' onClick={handleDeleteAllRead}>
                Delete All Read
              </h1>
            </div>
          </Tabs.TabPane>
        </Tabs>
    </Layout>
  )
}

export default NotificationPage