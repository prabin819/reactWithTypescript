import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  {
    /* as operator */
  }
  const handleLogin = () => {
    setUser({
      name: "viswas",
      email: "viswas@male.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>{" "}
      {/* no check required now because there is no possibility that the user is null  */}
    </div>
  );
};
