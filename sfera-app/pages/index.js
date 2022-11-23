import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import jwt_decode from 'jwt-decode';
import '../styles/Index.module.css';

const MyApp = () => {

    function handleCallbackResponse(response){
      console.log('Encoded JWT ID token: ' + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
    }

    useEffect(() => {
      google.accounts.id.initialize({
        client_id: "6596912059-ovhg97h16hb7ffui8f75sm1au73bpkf1.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: 'outline', size: 'large'}
      );
    }, []);

    return(
      <div className='login'>
          <form action="/send-data-here" method="post">
          <label for="email">Email</label>
          <input
          type="text"
          id="email"
          name="email"
          required
          minlength="10"
          pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
          />
          <label for="name">Password</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          required 
          minlength="8"
          pattern="[a-z0-9]{1,15}"
          />
          <button type="submit">Submit</button>
      </form>

        <h5>OR</h5>
        <div id='signInDiv'></div>
        <script src='https://accounts.google.com/gsi/client' async defer></script>
      </div>
    );
}
export default MyApp