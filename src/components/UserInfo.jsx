import React from 'react'

const UserInfo = (ele, index) => {
  console.log(ele , 'ele')
  return (
    <>
        <div className="card my-2" key={index}>
          <div className="card-header">
            {console.log(ele.ele.Name)}
            <h2>User Name : {ele.ele.Name}</h2>
          </div>
          <div className="card-body d-flex justify-content-center">
            <img style={{width: '60%'}} src={ele.ele?.image ? ele.ele?.image : 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'} alt="" />
          </div>
          <div className="card-footer">
            <h3> Email : {ele.ele.Email} </h3>
          </div>
        </div>
    </>
  )
}

export default UserInfo