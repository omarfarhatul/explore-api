function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postscontainer=document.getElementById('posts-container');
    for(const post of posts){
        const postdiv=document.createElement('div');
        postdiv.classList.add('post');
        postdiv.innerHTML=`
        <h4>User-${post.userId}</h5>
        <h5>Post: title: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postscontainer.appendChild(postdiv);
    }
}
loadPosts();


