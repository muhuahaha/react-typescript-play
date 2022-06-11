type Name = {
  name: { first: string; last: string };
};

export const Person = ({ name }: Name) => (
  <div>
    <h2>
      {name.first} {name.last}
    </h2>
  </div>
);
