import PropTypes from 'prop-types';
import { useEnigme } from '../enigma/useEnigme';

Success.propTypes = {
    enigmeId: PropTypes.string.isRequired,
}

export default function Success ({enigmeId}) {

    const {successText} = useEnigme(enigmeId);
    const {password: nextPassword} = useEnigme(Number(enigmeId)+1);

    return (<div>
        <h1>Bravo!</h1>
        <div dangerouslySetInnerHTML={{__html: successText}} />
        <p>Vous aurez besoin du mot de passe : {nextPassword}</p>
      </div>)
}