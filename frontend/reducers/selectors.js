export const allFriends = (person) => {
  return [];
}

export const allRequests = (person) => {

}

export const sentRequest = (state, p1, p2) => {
  let allFriendRequests = Object.values(state.entities.friendRequests);
  return allFriendRequests.filter(request => ((request[senderId] === p1.id && fship[receiverId] === p2.id) || (fship[senderId] === p2.id && fship[receiverId] === p1.id)))
}

export const isFriends = (state, p1, p2) => {
  let allFriendships = Object.values(state.entities.friendships);
  return allFriendships.filter(fship => ((fship[friendOne] === p1.id && fship[friendTwo] === p2.id) || (fship[friendOne] === p2.id && fship[friendTwo] === p1.id)))
}