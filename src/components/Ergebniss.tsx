type ErgebnissProps = {
  test: string;
};

function Ergebniss({ test }: ErgebnissProps) {
  console.log(test, 'test');
  return (
    <div className="p-5 bg-amber-200 my-4">
      <div>{test.toString()}</div>
    </div>
  );
}

export default Ergebniss;
