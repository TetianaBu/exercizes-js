const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let quantityOfPosts = listOfPosts.filter(
    (obj) => obj.author === authorName
  ).length;
  let quantityOfComents = listOfPosts
    .flatMap((p) => p.comments || [])
    .filter((comment) => comment.author === authorName).length;

  return `Post:${quantityOfPosts},comments:${quantityOfComents}`;
};