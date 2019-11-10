export const createLike = (like) => (
  $.ajax({
    method: 'post',
    url: `api/posts/${like.post_id}/likes`,
    data: { like }
  })
)

export const deleteLike = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/likes/${id}`
  })
)