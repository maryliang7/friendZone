// Friend requests

// export const fetchFriendRequests = () => {
//   $.ajax({
//     method: 'get',
//     url: 'api/friend_requests'
//   })
// }

// export const fetchFriendRequest = (id) => {
//   $.ajax({
//     method: 'get',
//     url: `/api/friend_requests/${id}`
//   })
// }

export const sendFriendRequest = (friend_request) => {
  // debugger
  return (
  $.ajax({
    method: 'post',
    url: 'api/friend_requests',
    data: { friend_request }
  })
)}

export const deleteFriendRequest = (friend_request) => (
  $.ajax({
    method: 'delete',
    url: `api/friend_requests/${friend_request}`
  })
)


// Friendships

// export const fetchFriendships = () => {
//   $.ajax({
//     method: 'get',
//     url: 'api/friendships'
//   })
// }

// export const fetchFriendship = (id) => {
//   $.ajax({
//     method: 'get',
//     url: `/api/friendships/${id}`
//   })
// }


export const addFriendship = (friendship) => (
  $.ajax({
    method: 'post',
    url: 'api/friendships',
    data: { friendship }
  })
)

export const deleteFriendship = (friendship) => (
  $.ajax({
    method: 'delete',
    url: `api/friendships/${friendship}`
  })
)