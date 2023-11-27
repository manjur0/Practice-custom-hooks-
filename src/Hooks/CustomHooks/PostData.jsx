import "./PostData.css";
import useFetch from "../useFetch";
import SinglPost from "./SinglPost";
const PostData = () => {
  const { datas, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const loadingMessage = "Loading...";
  const errorMessage = error;

  const dataMapFetch = datas.map((data) => {
    return <SinglPost key={data.id} data={data} />;
  });
  return (
    <div>
      <h1 className="heading">Fetching Posts Data using Custom Hooks </h1>
      <div className="post-container">
        {error && errorMessage}
        {loading && loadingMessage}
        {dataMapFetch}
      </div>
    </div>
  );
};

export default PostData;
