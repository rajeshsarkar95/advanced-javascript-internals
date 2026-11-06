// Run in a browser or a recent Node.js version with fetch available.
// Network access is required for this example.

async function loadPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const post = await response.json();
    console.log(post.title);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

loadPost();
