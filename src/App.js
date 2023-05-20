import logo from './logo.svg';
import './App.css';
import Header from './components/commenItems/Header';
import Status from './components/Status';
import UserInfo from './components/UserInfo';
import UserAdding from './components/helpers/UserAdding';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <>
      <Header/>
      <Status/>
      <hr/>
        .<div class="row justify-content-center align-items-center g-2">
          <div class="col">      <h1>Add User</h1>
</div>
          <div class="col">
           <UserAdding/>
          </div>
        </div>
      <hr/>
      <UsersComponent/>
    </>
  );
}

export default App;
