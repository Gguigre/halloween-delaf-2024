import PropTypes from 'prop-types';
import { useState } from 'react';
import { sanitize } from '../../domain/solve/sanitize';

Solve.propTypes = {
    text: PropTypes.string.isRequired,
    imageName: PropTypes.string.isRequired,
    solutions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onEnigmeSolved: PropTypes.func.isRequired
};

export default function Solve({text, solutions, onEnigmeSolved, imageName}) {

    const [isError, setIsError] = useState(false);

    const handleSolutionSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.solution.value;
        if (solutions.some(solution => sanitize(solution) === sanitize(input)) ) {
            onEnigmeSolved(true);
        } else {
            setIsError(true);
        }
    }

    return (<div>
        <p>{text}</p>
        {solutions.length > 0 && <>
            <img src={`${import.meta.env.BASE_URL}assets/${imageName}.png`} style={{width:"100%"}}/>
            <p>Entrez la solution pour continuer</p>
            {isError ? <p><strong>Oops, ce n&apos;est pas la bonne solution.<br />Retente ta chance !</strong></p> : null}
            <form onSubmit={handleSolutionSubmit}>
            <input type="text" name="solution"/>
            <button>Valider</button>
        </form>
        </>
        }
      </div>)
}