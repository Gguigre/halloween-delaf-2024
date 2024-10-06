import PropTypes from 'prop-types';
import { useState } from 'react';

PasswordLocked.propTypes = {
    password: PropTypes.string.isRequired,
    onPasswordSuccessful: PropTypes.func.isRequired
};

export default function PasswordLocked ({password, onPasswordSuccessful}) {

    const [isError, setIsError] = useState(false);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const passwordTry = e.target.elements.password.value;
        if (passwordTry === password) {
        onPasswordSuccessful(true);
          setIsError(false);
        } else {
          setIsError(true);
        }
      }

    return (<div>
        <p>Cette énigme est vérrouillée par un mot de passe</p>
        {isError ? <p><strong>Oops, ce n&apos;est pas le bon mot de passe.<br />Retente ta chance !</strong></p> : <p>Entrez le mot de passe pour continuer</p>}
        
        <form onSubmit={handlePasswordSubmit}>
        <input type="password" name="password" style={{marginRight: 16, marginBottom: 16}} />
        <button>Valider</button>
        </form>
      </div>)
}