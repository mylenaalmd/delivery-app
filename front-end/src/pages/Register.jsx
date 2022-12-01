import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import useGenericState from '../Hooks/useGenericState';

export default function Register() {
  const history = useHistory();

  const [isValid, setIsValid] = useState(false);

  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [genericState, setGenericState] = useGenericState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    const minNameLength = 12;
    const minPasswordLength = 6;

    if (genericState.name.length < minNameLength
      || !regex.test(genericState.email)
      || genericState.password.length < minPasswordLength) {
      setIsValid(true);
    } else {
      history.push('/customer/products');
    }
  };

  return (
    <div className="register-container">
      <h1>Cadastro</h1>

      <form className="register-form">
        <label className="label-form" htmlFor="name">
          Nome
          <input
            data-testid="common_register__input-name"
            className="input-form"
            type="text"
            id="name"
            name="name"
            value={ genericState.name }
            placeholder="Seu Nome"
            onChange={ setGenericState }
          />
        </label>

        <label className="label-form" htmlFor="email">
          Email
          <input
            data-testid="common_register__input-email"
            className="input-form"
            type="email"
            id="email"
            name="email"
            placeholder="seu-email@site.com.br"
            value={ genericState.email }
            onChange={ setGenericState }
          />
        </label>

        <label className="label-form" htmlFor="password">
          Senha
          <input
            data-testid="common_register__input-password"
            className="input-form"
            type="password"
            id="password"
            name="password"
            placeholder="**********"
            value={ genericState.password }
            onChange={ setGenericState }

          />
        </label>

        <button
          data-testid="common_register__input-button-register"
          type="submit"
          onClick={ handleSubmit }
        >
          CADASTRAR

        </button>
      </form>
      <div>
        {isValid
          ? (
            <p data-testid="common_register__element-invalid_register">
              Cadastro Inválido
            </p>)
          : null}
      </div>
    </div>
  );
}
