type personListProp = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: personListProp) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
