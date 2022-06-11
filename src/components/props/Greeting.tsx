type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ isLoggedIn, name, messageCount = 0 }: GreetProps) => (
  <div className="bg-green-200 p-5 border-2 border-purple-400 m-4">
    {isLoggedIn ? (
      <h2>
        Hey {name}! You have {messageCount} unread messages
      </h2>
    ) : (
      <h2>Welcome Guest</h2>
    )}
  </div>
);

export default Greet;
