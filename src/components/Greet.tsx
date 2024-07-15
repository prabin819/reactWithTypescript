type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? (
          <p>
            Welcome {props.name}! You have {props.messageCount} unread messages{" "}
          </p>
        ) : (
          <p>please log in to continue</p>
        )}
      </h2>
    </div>
  );
}

export default Greet;
