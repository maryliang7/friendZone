
export const sentRequest = (state, currentUser, user) => {
  // debugger
  if (state.entities.users[currentUser.id].sentRequests) {
    let allFriendRequests = Object.values(state.entities.users[currentUser.id].sentRequests);
    let request = allFriendRequests.filter(request => request.receiverId === user );
    return request;
  }
}

export const receivedRequest = (state, currentUser, user) => {
  if (state.entities.users[currentUser.id].receivedRequests) {
    let allReceivedRequests = Object.values(state.entities.users[currentUser.id].receivedRequests);
    let request = allReceivedRequests.filter(request => request.senderId === user);
    return request;
  }
}

export const friendshipId = (state, currentUser, user) => {
  // debugger
  let friendship;
  if (state.entities.users[currentUser.id].acceptedFriendships) {
    let aFriendship = Object.values(state.entities.users[currentUser.id].acceptedFriendships)
    aFriendship = aFriendship.filter(friendship => friendship.friendTwo === currentUser.id)
    if (aFriendship.length) friendship = aFriendship;
  } else if (state.entities.users[currentUser.id].sentFriendships) {
    let sFriendship = Object.values(state.entities.users[currentUser.id].sentFriendships)
    sFriendship = sFriendship.filter(friendship => friendship.friendOne === user)
    if (sFriendship.length) friendship = sFriendship;
  }

  return friendship;
}