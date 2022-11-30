import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import httpRequest from '../axios/config';
// ESTÃO COMENTADAS AS PARTES QUE ESTÂO QUEBRANDO

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  // const navigate = useNavigate();

  const verifyLogin = (email, password) => {
    const PASSWORD_LENGHT = 6;
    const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const verifyEmail = EMAIL_REGEX.test(email);
    const verifyPassword = password.length >= PASSWORD_LENGHT;
    return verifyEmail && verifyPassword;
  };

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
          onChange={ (event) => setEmail(event.target.value) }
          type="text"
        />
        <input
        // dataTestId={ dataTestIds[2] }
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
          type="password"
        />
        <button type="submit" disabled={ isButtonDisable }>
          Login
        </button>
        {/* <button type="submit" handleClick={ () => navigate('/register') }>
          Ainda não tenho conta
        </button> */}
        {/* <Link
          to="/register"
        >
          Ainda não tenho conta
        </Link> */}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
