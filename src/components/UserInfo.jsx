import React from 'react'

const UserInfo = (ele, index) => {
  console.log(ele , 'ele')
  return (
    <>
        <div style={{width:'350px', height:'500px'}} className="card my-2" key={index}>
          <div className="card-header ">
            {console.log(ele.ele.Name)}
            <h3 className='text-warning'>User Name</h3>
            <span className='d-flex justify-content-center text-warning'>{ele?.ele?.Name}</span>
          </div>
          <div className="card-body d-flex justify-content-center">
            <img style={{width: '60%'}} src={ele.ele?.URL ? ele.ele?.URL : 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'} alt="" />
          </div>
          <div className="card-footer text-warning">
            <h4> Email </h4>
            <span className='d-flex justify-content-center '>{ele.ele.Email}</span>
          </div>
        </div>
    </>
  )
}

export default UserInfo