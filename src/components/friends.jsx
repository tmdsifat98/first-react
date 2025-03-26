import { use } from "react"

export default function Friends({friendsData}) {
  const friends=use(friendsData)
  return(
    <div>
      <h1>total friend: {friends.length}</h1>
      <div className="user">
        {
        friends.map((friend)=>(
          <h2 key={friend.id} className="user border-2 my-1 p-2 my-1 flex flex-col justify-center items-center ">
            <span className=" border-red-500 border my-1 p-3">friend's mail : {friend.email}</span>
            <p className=" border-red-500 border p-3">friend's name: {friend.name}</p>
            </h2>
        ))
        }
      </div>
    </div>
  )
}