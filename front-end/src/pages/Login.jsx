import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import httpRequest from '../axios/config';
import verifyLogin from '../Utils/verifyLogin';

export default function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  const handleSubmmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await httpRequest.post('login', [email, password]);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (err) {
      setError(error.message);
    }
  };
  useEffect(() => {
    setIsButtonDisable(!verifyLogin(email, password));
  }, [email, password]);
  return (
    <div className="LoginPage">
      <img src="" alt="logo" className="AppLogo" />
      <h1>Delivery App</h1>
      <form onSubmit={ handleSubmmit }>
        <input
          value={ email }
          handleChange={ (event) => setEmail(event.target.value) }
          type="text"
        />
        <input
          dataTestId={ dataTestIds[2] }
          value={ password }
          handleChange={ (event) => setPassword(event.target.value) }
          type="password"
        />
        <button type="submit" disabled={ isButtonDisable }>
          Login
        </button>
        {/* <button type="submit" handleClick={() => navigate("/register")}>
          Ainda não tenho conta
        </button> */}
        <Link
          data-testid="register-login-btn"
          to="/register"
          className="register-login"
        >
          Ainda não tenho conta
        </Link>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
