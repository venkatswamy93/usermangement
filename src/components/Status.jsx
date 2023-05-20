import React from 'react'

const Status = () => {
  return (
    <>
        <div className='container my-3'>
        <div className="row">
            <div className="col">
                <div className="card bg-primary">
                    <div className="card-body d-flex justify-content-center">
                        <h3 className='card-title'> Total Users</h3>
                    </div>
                    <div className="card-footer  d-flex justify-content-center">
                        <h2>34</h2>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card bg-warning">
                    <div className="card-body d-flex justify-content-center">
                        <h3 className='card-title'> Inactive Users</h3>
                    </div>
                    <div className="card-footer  d-flex justify-content-center">
                        <h2>34</h2>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card bg-success">
                    <div className="card-body d-flex justify-content-center">
                        <h3 className='card-title'> Active Users</h3>
                    </div>
                    <div className="card-footer  d-flex justify-content-center">
                        <h2>34</h2>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card bg-danger">
                    <div className="card-body d-flex justify-content-center">
                        <h3 className='card-title'> Deleted Users</h3>
                    </div>
                    <div className="card-footer  d-flex justify-content-center">
                        <h2>34</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Status