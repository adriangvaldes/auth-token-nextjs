import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Dashboard(){
  const { user } = useContext(AuthContext)

  return (
    <h1>Dashboard: {user.email}</h1>
  );
}