import PropTypes from 'prop-types';
import { useState } from 'react';

Solve.propTypes = {
    text: PropTypes.string.isRequired,
    hashedSolution: PropTypes.string.isRequired,
    onEnigmeSolved: PropTypes.func.isRequired
};

export default function Solve({text, hashedSolution, onEnigmeSolved}) {

    const [isError, setIsError] = useState(false);

    const handleSolutionSubmit = (e) => {
        e.preventDefault();
        const solution = e.target.elements.solution.value;
        if (hashedSolution === solution) {
            onEnigmeSolved(true);
        } else {
            setIsError(true);
        }
    }

    return (<div>
        <h1>{text}</h1>
        <p>Entrez la solution pour continuer</p>
        {isError ? <p><strong>Oops, ce n&apos;est pas la bonne solution.<br />Retente ta chance !</strong></p> : null}
        <form onSubmit={handleSolutionSubmit}>
        <input type="text" name="solution"/>
        <button>Valider</button>
        </form>
      </div>)
}