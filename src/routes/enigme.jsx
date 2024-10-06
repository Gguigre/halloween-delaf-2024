import { useState } from "react";
import { useParams } from "react-router-dom";
import PasswordLocked from "../modules/password/passwordLocked";
import Solve from "../modules/solve/solve";
import Success from "../modules/success/success";
import { enigmes } from "../domain/enigmes/engimes";
import backgroundImage from "../assets/background.png";

const useEnigme = (enigmeId) => {
  const allEnigmes = enigmes;
  return allEnigmes[enigmeId]
}

export default function Enigme() {

  const { enigmeId } = useParams();
  const {password, text, imageName, solutions, successText} = useEnigme(enigmeId);
  const {password: nextPassword} = useEnigme(Number(enigmeId)+1);
  const [isSolved, setIsSolved] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const onPasswordSuccessful = () => {
    setIsUnlocked(true);
  }

  const onEnigmeSolved = () => {
    setIsSolved(true);
  }

  return (
    <div className="page" >
      {
        password && !isUnlocked ? (
          <PasswordLocked password={password} onPasswordSuccessful={onPasswordSuccessful} />
        ) : 
          isSolved ? (
            <Success successText={successText} nextPassword={nextPassword} />
          ) : (
            <Solve text={text} solutions={solutions} onEnigmeSolved={onEnigmeSolved} imageName={imageName} />
          )
      }
    </div>
  );
}