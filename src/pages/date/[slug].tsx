import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <a href="/">Go Back</a>
      <p>Post {slug}</p>
    </>
  );
};

export default Post;
