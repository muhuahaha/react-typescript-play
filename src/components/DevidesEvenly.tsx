import { useCallback, useEffect, useState } from 'react';

type DevidesEvenlyProps = {
  funcString: string;
};

function DevidesEvenly({ funcString }: DevidesEvenlyProps) {
  // console.log(funcString);
  const [fuu, setFuu] = useState<string | null>(null);

  function imposterFormula(i: number, p: number): string {
    return `${Math.floor(100 * (i / p))}%`;
  }

  imposterFormula(1, 9);

  const result = useCallback(() => eval(funcString), [funcString]);

  // console.log(result());

  useEffect(() => {
    setFuu(result());
  }, [result]);

  console.log(fuu, 'fuuuuuuu');
  return (
    <div>
      <div className="p-5 bg-blue-300 my-4">
        <div className="text-slate-600">{fuu?.toString()}</div>
      </div>
    </div>
  );
}

export default DevidesEvenly;
