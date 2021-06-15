import react, { useEffect, useState } from 'react'
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import SideBar from "./SideBar";
import Swal from 'sweetalert2';
import Axios from 'axios';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router';

export const Dashboard = () => {

  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");


  const fetchUsers = async () => {
    console.log("ERROR")
    const allUsers = await Axios.get("https://ahlulquran.herokuapp.com/admin/allUsers");
    console.log(allUsers.data.useres);
    return allUsers.data
  }


  useEffect(() => {
    setLoading(true);
    const isCookieSet = Cookie.get('access-token');
    console.log(isCookieSet);
    if (!isCookieSet) {
      setAuth(false);
      return;
    }
    setAuth(true);
    setLoading(true);
    fetchUsers().then(res => {
      console.log(res.useres);
      setUsers(res.useres);
      setLoading(false);
    })


  }, [])

  const clearCookie = () => {
    Cookie.remove('access-token');
    window.location.replace("/");
  }

  if (auth) {
    return (
      loading ? <h1>Loading ....</h1> : <>
        <Header clearCookie={clearCookie} searchName={searchName} setSearchName={setSearchName} />
        <div className='container-fluid'>
          <div className='row'>
            <SideBar />
            <Main users={users} searchName={searchName} setSearchName={setSearchName} />
          </div>
        </div>
      </>
    );
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Please login  in with user/password before procceding to this page!',
      icon: 'error',
      confirmButtonText: 'OK'
    }).then(res => {
      if (res.isConfirmed) {
        window.location.replace("/");
      }
    });
    return (
      <h1></h1>
    )
  }


};
