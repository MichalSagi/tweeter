const Renderer = () => {

    const renderPosts = (posts) => {
        $('#posts').text(' ')
        // $('body').append('<div id ="posts"></div>')
        
        for (let post of posts) {
            $('#posts').append(`<div class='post' id=${post.id} data-id=${post.id}></div>`)
            $(`#${post.id}`).append(`<div class='post-text' id=${post.id} data-id=${post.id}>${post.text}</div>`)

            for (let comment of post.comments) {
                $(`#${post.id}`).append(`<div class='comments' data-id=${comment.id} id =${comment.id}></div>`)
                $(`#${comment.id}`).append(`<span class="delete-comment" data-id=${comment.id}> X </span>`)
                $(`#${comment.id}`).append(`<p class='comments' data-id=${comment.id}>${comment.text}</p>`)
            }
            
            $(`#${post.id}`).append(`<input type="text" placeholder="Got something to say?">`)
            $(`#${post.id}`).append(`<button  class='btnAddComent'> Comment </button></br>`)
            $(`#${post.id}`).append('<span class="delete">Delete Post</span>')
        }
    }
    return {
        renderPosts
    }
}

const render = Renderer()
