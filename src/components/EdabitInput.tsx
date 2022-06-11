import { useState } from 'react';
import DevidesEvenly from './DevidesEvenly';

function EdabitInput() {
  const [term, setTerm] = useState('');
  const [para, setPara] = useState(null);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something

    console.log(typeof term);

    const regex: RegExpMatchArray | null = term.match(/(?<=\().+?(?=\))\)/gi);
    alert(regex);
    const testArray: [] = [];
    regex?.map((x) => testArray.push(x));
    setPara(testArray);
  };

  return (
    <div className="container mx-auto p-4">
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
      <div>
        {para?.map((foo: string) => (
          <div key={foo.toString()}>
            <DevidesEvenly funcString={foo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EdabitInput;
