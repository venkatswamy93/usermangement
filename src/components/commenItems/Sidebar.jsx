import React from 'react'

const Sidebar = () => {
  return (
    <>
        <a className="btn btn-warning mx-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</a>
<div style={{width: '15%'}}  className="offcanvas offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header bg-warning d-flex justify-content-center">
        <h5 className='text-primary'>User Management</h5>
  </div>
  <div className="offcanvas-body">
  
    <div className="dropdown mt-3">
      
    </div>
  </div>
</div>
    </>
  )
}

export default Sidebar