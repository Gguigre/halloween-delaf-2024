import PropTypes from 'prop-types';

Success.propTypes = {
    successText: PropTypes.string.isRequired,
    nextPassword: PropTypes.string.isRequired
}

export default function Success ({successText, nextPassword}) {
    return (<div>
        <h1>Bravo!</h1>
        <div dangerouslySetInnerHTML={{__html: successText}} />
        <p>Vous aurez besoin du mot de passe : {nextPassword}</p>
      </div>)
}