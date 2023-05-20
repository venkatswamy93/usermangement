import React from 'react'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
  <div class="container-fluid">
    <Sidebar/>
    <a class="navbar-brand" href="#">User Management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center col-5" id="navbarSupportedContent">
      <div className='col-4'>
            <input class="form-control rounded-pill me-2" type="search" placeholder="Search" aria-label="Search" />
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header