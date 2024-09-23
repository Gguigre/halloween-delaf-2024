import PropTypes from 'prop-types';

Success.propTypes = {
    successText: PropTypes.string.isRequired,
    nextPassword: PropTypes.string.isRequired
}

export default function Success ({successText, nextPassword}) {
    return (<div>
        <h1>Bravo!</h1>
        <p>{successText}</p>
        <p>Pour y accéder, vous aurez besoin du mot de passe : {nextPassword}</p>
      </div>)
}