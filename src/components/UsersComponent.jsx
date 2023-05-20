import React from 'react'
import UserInfo from './UserInfo';

const UsersComponent = () => {
    const data = JSON.parse(localStorage.getItem('Users'));
    const userData = data ? data : [] ;
  return (
    <>
        <div className="container">
            <div className="row">
                    {
                        userData ? userData.map((ele, i) => {
                                return(
                                    <>
                                        <div className="col-4">
                                            <UserInfo
                                             ele={ele}
                                             index ={i}/>
                                        </div>
                                    </>
                                )
                        }) : ''
                    }
            </div>
        </div>
    </>
  )
}

export default UsersComponent