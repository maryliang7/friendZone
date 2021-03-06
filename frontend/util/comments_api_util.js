export const createComment = (comment) => (
  $.ajax({
    method: 'post',
    url: `api/comments`,
    data: { comment }
  })
)

export const updateComment = (comment) => (
  $.ajax({
    method: 'patch',
    url: `api/comments/${comment.id}`,
    data: { comment }
  })
)

export const deleteComment = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/comments/${id}`
  })
)