export const fetchPosts = (query) => {
  return (
  $.ajax({
    method: 'get',
    url: 'api/posts',
    data: { query }
  })
)}

export const fetchPost = (id) => (
  $.ajax({
    method: 'get',
    url: `api/posts/${id}`
  })
)

export const createPost = (post) => (
  $.ajax({
    method: 'post',
    url: `api/posts`,
    data: post,
    contentType: false,
    processData: false
  })
)

export const updatePost = (post) => (
  $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  })
)

export const deletePost = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/posts/${id}`
  })
)