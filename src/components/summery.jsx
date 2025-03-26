import { use } from "react";

export default function Summery({ userData }) {
  const users = use(userData);
  // console.log(users);
  return (
    <div>
      <h1>total user : {users.length}</h1>
      <div >
        {users.map((user) => (
          <div key={user.id} className="bg-lime-400 my-2 w-fit">
            <p>user Id: {user.id}</p>
            <h2>username: {user.name}</h2>
            <h3>email: {user.email}</h3>
          </div>

        ))}
      </div>
    </div>
  );
}
