const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value.trim();
    const postContent = document.querySelector('#post-content').value.trim();
  
    if (postTitle && postContent) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ postTitle, postContent }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.posts-list')
    .addEventListener('click', delButtonHandler);
  