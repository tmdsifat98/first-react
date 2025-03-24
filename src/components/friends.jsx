import { use } from "react"

export default function Friends({friendsData}) {
  const friends=use(friendsData)
  return(
    <div>
      <h1>total friend: {friends.length}</h1>
      <div className="user">
        {
        friends.map((friend)=>(
          <h2 className="user">
            <span>friend's mail : {friend.email}</span>
            <p>friend's name: {friend.name}</p>
            </h2>
        ))
        }
      </div>
    </div>
  )
}