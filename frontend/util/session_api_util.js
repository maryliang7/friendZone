export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  })
);

export const fetchUser = (id) => (
  $.ajax({
    method: 'get',
    url: `api/users/${id}`
  })
)

export const fetchAllUsers = (query) => (
  $.ajax({
    method: 'get',
    url: `api/users`,
    data: { query }
  })
)


