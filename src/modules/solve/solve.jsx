import PropTypes from 'prop-types';
import { useState } from 'react';
import { sanitize } from '../../domain/solve/sanitize';
import { useEnigme } from '../enigma/useEnigme';
import { analytics } from '../../firebase-config';
import { logEvent } from 'firebase/analytics';

Solve.propTypes = {
    enigmeId: PropTypes.string.isRequired,
    onEnigmeSolved: PropTypes.func.isRequired
};

export default function Solve({enigmeId, onEnigmeSolved}) {

    const {text, imageName, solutions} = useEnigme(enigmeId);

    const [isError, setIsError] = useState(false);

    const handleSolutionSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.solution.value;
        if (input === '') {
                return;
        }
        if (solutions.some(solution => sanitize(solution) === sanitize(input)) ) {
            onEnigmeSolved(true);
        } else {
            logEvent(analytics, 'wrong_answer', {
                enigma_id: enigmeId,
                answer: input,
                expected: solutions.join(' OR ')
              });
            setIsError(true);
        }
    }

    return (<div>
        <div dangerouslySetInnerHTML={{__html: text}} />
        {solutions.length > 0 && <>
            <img src={`${import.meta.env.BASE_URL}assets/${imageName}.png`} style={{width:"100%"}}/>
            <p>Entrez la solution pour continuer</p>
            {isError ? <p><strong>Oops, ce n&apos;est pas la bonne solution.<br />Retente ta chance !</strong></p> : null}
            <form onSubmit={handleSolutionSubmit}>
            <input style={{marginRight: 16, marginBottom: 16}} type="text" name="solution" onChange={() => {
                setIsError(false);
            }}/>
            <button>Valider</button>
        </form>
        </>
        }
      </div>)
}