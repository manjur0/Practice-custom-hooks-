import "./SinglePost.css";
const SinglPost = ({ data }) => {
  console.log(data);
  const { id, title, body } = data;
  return (
    <div className="blog_post">
      <div className="img_pod"></div>
      <div className="container_copy">
        <h3>27 November 2023</h3>
        <p>{id}</p>
        <h1>{title}</h1>
        <p>{body}</p>
        <a className="btn_primary" href="#" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default SinglPost;
