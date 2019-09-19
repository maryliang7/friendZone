
// export const sentRequest = (state, currentUser, user) => {
//   if (state.entities.users[currentUser.id].sentRequests) {
//     let allFriendRequests = Object.values(state.entities.users[currentUser.id].sentRequests);
//     let request = allFriendRequests.filter(request => request.receiverId === user );
//     return request;
//   }
// }

export const sentRequest = (state, currentUser, user) => {
  if (state.entities.friendRequests) {
    let allFriendRequests = Object.values(state.entities.friendRequests);
    let request = allFriendRequests.filter(request => request.receiverId === user );
    return request;
  }
}



// export const receivedRequest = (state, currentUser, user) => {
//   if (state.entities.users[currentUser.id].receivedRequests) {
//     let allReceivedRequests = Object.values(state.entities.users[currentUser.id].receivedRequests);
//     let request = allReceivedRequests.filter(request => request.senderId === user);
//     return request;
//   }
// }

export const receivedRequest = (state, currentUser, user) => {
  if (state.entities.friendRequests) {
    // debugger
    let allReceivedRequests = Object.values(state.entities.friendRequests);
    let request = allReceivedRequests.filter(request => request.senderId === user);
    return request;
  }
}

export const allReceivedRequests = (state, currentUser) => {
  // debugger
  if (state.entities.users[currentUser.id].receivedRequests) {
    let allRequests = Object.values(state.entities.users[currentUser.id].receivedRequests);
    return allRequests;
  }
  return [];
}

export const friendshipId = (state, currentUser, user) => {
  let friendship;
  if (state.entities.users[currentUser.id].acceptedFriendships) {
    let aFriendship = Object.values(state.entities.users[currentUser.id].acceptedFriendships)
    aFriendship = aFriendship.filter(friendship => friendship.friendOne === user)
    if (aFriendship.length) friendship = aFriendship;
  } else if (state.entities.users[currentUser.id].sentFriendships) {
    let sFriendship = Object.values(state.entities.users[currentUser.id].sentFriendships)
    sFriendship = sFriendship.filter(friendship => friendship.friendTwo === currentUser.id)
    if (sFriendship.length) friendship = sFriendship;
  }

  return friendship;
}