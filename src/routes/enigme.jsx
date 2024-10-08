import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PasswordLocked from "../modules/password/passwordLocked";
import Solve from "../modules/solve/solve";
import Success from "../modules/success/success";
import { useEnigme } from "../modules/enigma/useEnigme";
import { analytics } from '../firebase-config';
import { logEvent } from 'firebase/analytics';



export default function Enigme() {

  const { enigmeId } = useParams();
  const {password} = useEnigme(enigmeId);
  const [isSolved, setIsSolved] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    setIsSolved(false);
    setIsUnlocked(false);
  }, [enigmeId]);

  const onPasswordSuccessful = () => {
    logEvent(analytics, 'unlocked', {
      enigma_id: enigmeId,
    });
    setIsUnlocked(true);
  }

  const onEnigmeSolved = () => {
    logEvent(analytics, 'solved', {
      enigma_id: enigmeId,
    });
    setIsSolved(true);
  }

  return (
    <div className="page" >
      {
        password && !isUnlocked ? (
          <PasswordLocked enigmeId={enigmeId} onPasswordSuccessful={onPasswordSuccessful} />
        ) : 
          isSolved ? (
            <Success enigmeId={enigmeId} />
          ) : (
            <Solve onEnigmeSolved={onEnigmeSolved} enigmeId={enigmeId} />
          )
      }
    </div>
  );
}