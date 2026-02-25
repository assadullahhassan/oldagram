let posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        iconPath: "images/icon-heart.png",
        isLiked: false
    },
    {
        id: 2,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        iconPath: "images/icon-heart.png",
        isLiked: false
    },
        {
        id: 3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        iconPath: "images/icon-heart.png",
        isLiked: false
    }
]

let container  = document.querySelector(".container")
let post = ""
let isLiked = false
let heartIcon = "images/icon-heart.png"

function renderPosts() {
    container.innerHTML = "";
    post = ""
    for (let i=0; i < posts.length; i++) {
    post += `
        <div class="sect-container">
            <div>
                <img class="profile" src="${posts[i].avatar}">
             </div>
             <div class="label-texts">
                 <label>${posts[i].name}</label>
                 <p>${posts[i].location}</p>
              </div>
              </div>
              <img ondblclick="incrementLikes(${posts[i].id})" class="post-img" src="${posts[i].post}"/>
                <div class="icons">
                <a onclick="incrementLikes(${posts[i].id})"><img src="${posts[i].iconPath}"></a>
                <a><img src="images/icon-comment.png"></a>
                <a><img src="images/icon-dm.png"></a>
                <p><span class="bold-text">${posts[i].likes} likes</span></p>
                <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
           </div>
           <hr>
        `
    }
    container.innerHTML = post
}

renderPosts()


function incrementLikes(event) {
    if (isLiked) {
        isLiked = false;
        heartIcon = "images/icon-heart.png";
    } else {
        isLiked = true;
        heartIcon = "images/icon-heart-filed.png";
    }
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === event) {
            posts[i].likes = posts[i].isLiked ? posts[i].likes - 1 : posts[i].likes + 1;
            posts[i].isLiked = !posts[i].isLiked
            posts[i].iconPath = posts[i].isLiked ? "images/icon-heart-filed.png" : "images/icon-heart.png";
            break; 
        }
    }
    renderPosts()
}



