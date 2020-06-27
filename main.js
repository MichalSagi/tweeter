const tweeter = Tweeter()
const renderer = Renderer()


renderer.renderPosts(tweeter.getPosts())

const post = function () {
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())
    $('#input').val('')
}

$('#posts').on('click', '.delete', function () {
    let $postId = $(this).closest('.post').data().id
    tweeter.removePost($postId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.btnAddComent', function () {
    let $postId = $(this).closest('.post').data().id
    let $comentText = $(this).closest('.post').find('input').val()
    tweeter.addComment($postId, $comentText)
    renderer.renderPosts(tweeter.getPosts())
    $(this).closest('.post').find('input').val('')
})

$('#posts').on('click', '.delete-comment', function () {
    let $postId = $(this).closest('.post').data().id
    let $comentId = $(this).data().id
    tweeter.removeComment($postId, $comentId)
    renderer.renderPosts(tweeter.getPosts())
})
