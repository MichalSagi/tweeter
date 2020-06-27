const Tweeter = () => {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]



    let lastIdNum = 'p2'
    const creatPostId = () => {
        lastIdNum = 'p' + (parseInt(lastIdNum[1]) + 1)
        return lastIdNum
    }

    let lastCommensId = "c6"
    const creatCommentId = () => {
        lastCommensId = 'c' + (parseInt(lastCommensId[1]) + 1)
        return lastCommensId
    }

    const postIdCounter = () => posts.length

    const commentIdCounter = () => {
        let counterCommentId = 0
        for (let comment in posts) {
            counterCommentId += (posts[comment].comments).length
        }
        return counterCommentId
    }

    const getPosts = () => posts

    const addPost = (text) => {
        posts.push({
            "text": text,
            "id": creatPostId(),
            "comments": []
        })
    }

    const removePost = (postID) => {
        for (let i = 0; i < posts.length; i++) {
            if (postID === posts[i].id) {
                posts.splice(i, 1)
                break
            }
        }
    }

    const addComment = (postID, text) => {
        for (let i = 0; i < posts.length; i++) {
            if (postID === posts[i].id) {
                posts[i].comments.push(
                    {
                        "id": creatCommentId(),
                        "text": text,
                    })
            }
        }
    }

    const removeComment = (postID, commentID) => {
            for (let post of posts) {
            if (postID === post.id) {
                for (let i= 0; i < post.comments.length; i++){
                    if (commentID === post.comments[i].id) {
                        post.comments.splice(i, 1)
                        break
                    }
                }
            }
        }
    }
    
    return {
        postIdCounter,
        commentIdCounter,
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

const twit = Tweeter()
