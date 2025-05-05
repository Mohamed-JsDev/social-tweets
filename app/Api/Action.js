export const Post = async () => {
  const postsRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=100"
  );
  const postsData = await postsRes.json();
  return postsData;
};
export const AllUsers = async () => {
  const usersRes = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const usersData = await usersRes.json();
  return usersData;
};
export const UserId = async (id) => {
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const userData = await userRes.json();
  return userData;
};

export const Comments = async () => {
  const resComments = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comments = await resComments.json();
  return comments;
};

export const Photo = async () => {
  const url = `https://pixabay.com/api/?key=50084160-dd6f065fed11f07221eeaaa10&q=human+activity&image_type=photo&pretty=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
};
