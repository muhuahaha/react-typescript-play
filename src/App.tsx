import Greeting from './components/props/Greeting';
import { Person } from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import DevidesEvenly from './components/DevidesEvenly';
import EdabitInput from './components/EdabitInput';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  const test = {
    a: 87,
    b: 49,
  };

  return (
    <div className="App">
      <div className="container mx-auto bg-gray-400">
        <div className="flex gap-x-5">
          <Greeting name="John" isLoggedIn={false} messageCount={10} />
          <Person name={personName} />
        </div>
        <div className="" />
        <div>
          <PersonList names={nameList} />
        </div>
        <div>
          <Status status="success" />
        </div>
        <div>
          <DevidesEvenly pair={test} />
        </div>
        <div>
          <EdabitInput />
        </div>
      </div>
    </div>
  );
}

export default App;
