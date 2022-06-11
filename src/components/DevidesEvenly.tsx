import { useCallback, useEffect, useState } from 'react';

type DevidesEvenlyProps = {
  funcString: string;
};

function DevidesEvenly({ funcString }: DevidesEvenlyProps) {
  console.log(funcString);
  const [fuu, setFuu] = useState(null);

  function dividesEvenly(a: number, b: number) {
    return a % b === 0;
  }

  dividesEvenly(32, 8);
  const result = useCallback(() => eval(funcString), []);

  console.log(result());

  useEffect(() => {
    setFuu(result());
  }, [result]);

  return (
    <div>
      <div className="p-5">
        <h3>Divides Evenly</h3>
        Given two integers, a and b, return true if a can be divided evenly by
        b. Return false otherwise.
        <div className="text-green-200">{fuu ? fuu.toString() : 'no'}</div>
        <div />
      </div>
    </div>
  );
}

export default DevidesEvenly;
