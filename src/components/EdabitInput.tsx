import { useState } from 'react';
import DevidesEvenly from './DevidesEvenly';
import Ergebniss from './Ergebniss';

function EdabitInput() {
  const [term, setTerm] = useState('');
  const [para, setPara] = useState<string[]>([]);
  const [res, setRes] = useState<string[]>([]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    const resultArr: string[] = [];
    const regexResult = term.match(/(?<=\), ).+?(?=\))/gim);
    regexResult?.map((x) => resultArr.push(x));
    console.log(regexResult, 'result');
    console.log(resultArr[3], 'resultArr');
    setRes(resultArr);
    const regex: RegExpMatchArray | null = term.match(/(?<=\().+?(?=\))\)/gim);
    alert(regex);
    alert(term);
    const testArray: string[] = [];
    regex?.map((x) => testArray.push(x));
    setPara(testArray);
    alert(res);
  };

  return (
    <div className="container mx-auto p-4 bg-amber-300">
      <h1 className="text-4xl mb-3">Teststation Edabit</h1>
      <div className="container p-4 bg-amber-500">
        <h2 className="text-2xl">
          Create a function that calculates the chance of being an imposter. The
          formula for the chances of being an imposter is 100 × (i / p) where i
          is the imposter count and p is the player count. Make sure to round
          the value to the nearest integer and return the value as a percentage.
        </h2>
        <div>imposterFormula(1, 10) ➞ "10%"</div>
      </div>

      <p>
        Test.assertEquals(imposterFormula(1, 9), "11%")
        Test.assertEquals(imposterFormula(2, 10), "20%")
        Test.assertEquals(imposterFormula(3, 7), "43%")
      </p>
      <form onSubmit={submitForm}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Enter a term"
          className="input"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="flex">
        <div>
          {para?.map((foo: string) => (
            <div key={foo.toString()}>
              <DevidesEvenly funcString={foo} />
            </div>
          ))}
        </div>
        <div>
          {res?.map((foo: string, index) => (
            <div key={index.toString()}>
              <Ergebniss test={foo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EdabitInput;
