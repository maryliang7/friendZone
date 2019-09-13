// Friend requests

export const fetchFriendRequests = () => {
  $.ajax({
    method: 'get',
    url: '/api/friend_requests'
  })
}

// export const fetchFriendRequest = (id) => {
//   $.ajax({
//     method: 'get',
//     url: `/api/friend_requests/${id}`
//   })
// }

export const sendFriendRequest = (request) => (
  $.ajax({
    method: 'post',
    url: '/api/friend_requests',
    data: { request }
  })
)

export const deleteFriendRequest = (request) => (
  $.ajax({
    method: 'delete',
    url: `/api/friend_requests/${request.id}`
  })
)


// Friendships

export const fetchFriendships = () => {
  $.ajax({
    method: 'get',
    url: '/api/friendships'
  })
}

// export const fetchFriendship = (id) => {
//   $.ajax({
//     method: 'get',
//     url: `/api/friendships/${id}`
//   })
// }


export const addFriendship = (request) => (
  $.ajax({
    method: 'post',
    url: '/api/friendships',
    data: { request }
  })
)

export const deleteFriendship = (request) => (
  $.ajax({
    method: 'delete',
    url: `/api/friendships/${request.id}`
  })
)