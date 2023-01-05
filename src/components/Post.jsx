import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { userId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts[0]);
        setIsLoading(false);
      });
    },2000)
    
  }, [userId]);

  return (
    <div className="user-post">
        
        <h2>{post.title || <Skeleton count={2}/>}</h2>
        <p>{post.body || <Skeleton count={3}/>}</p>
        {!isLoading && <Link to="/">Back</Link>}
      
    </div>
  );
};

export default Post;
