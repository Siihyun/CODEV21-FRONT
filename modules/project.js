const baseURL = "http://34.64.124.246:8080/api/v1";

const handleProject = async () => {
  const posts = await getAllPost();
  console.log(posts);
};

const getAllPost = async () => {
  try {
    const response = await fetch(baseURL + "/boards?gisu=2");
    const posts = await response.json();

    if (response.ok) return posts;
    else throw new Error(posts);
  } catch (err) {
    console.log(err);
    alert("post 갱신에 실패하였습니다. 다시 시도해 주세요.");
    return "failed";
  }
};

const getPost = async (postId) => {
  try {
    const response = await fetch(baseURL + `/boards/${postId}`);
    const comments = await response.json();

    if (response.ok) return comments;
    else throw new Error(comments);
  } catch (err) {
    console.log(err);
    alert("댓글 갱신에 실패하였습니다.");
    return "unknown";
  }
};

module.exports = {
  handleProject,
  getAllPost,
  getPost,
};
