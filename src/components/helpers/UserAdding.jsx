import React, { useState } from 'react'

const UserAdding = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [url, setURL] = useState('');

    const handleFirstName = (value) =>{
        setFirstName(value);
    }
    const handleLastName = (value) =>{
        setLastName(value);
    }
    const handleEmail = (value) =>{
        setEmail(value);
    }
    const handleURL = (value) =>{
        setURL(value);
    }
    const handleDob = (value) =>{
        setDob(value);
    }
    const existingUsers = localStorage.getItem('Users');
    let parsedUsers = [];
    parsedUsers = existingUsers ? JSON.parse(existingUsers) : [];
    const handleAddUser = () =>{
        const user = {
            Name : firstName+" "+lastName,
            Email : email,
            URL : url,
            DOB : dob
        }
        parsedUsers.push(user);
        localStorage.setItem('Users' , JSON.stringify(parsedUsers));
    }
  return (
    <>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add User
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add User Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label className='form-label'>First Name</label>
        <input className='form-control' onChange={e => {handleFirstName(e.target.value)}} type='text'></input>

        <label className='form-label'>Last Name</label>
        <input className='form-control' onChange={e => {handleLastName(e.target.value)}} type='text'></input>

        <label className='form-label'>Email</label>
        <input className='form-control' onChange={e => {handleEmail(e.target.value)}} type='text'></input>
        
        <label className='form-label'>Pase User Image URL</label>
        <input className='form-control' onChange={e => {handleURL(e.target.value)}} type='text'></input>
        
        
        <label className='form-label'>Date of Birth</label>
        <input className='form-control' onChange={e => {handleDob(e.target.value)}} type='text'></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleAddUser} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default UserAdding