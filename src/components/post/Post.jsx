import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1658053283477-b985256569bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum velit
        dolores voluptatum dolorum quia debitis omnis fugiat corrupti iusto
        pariatur, ea praesentium, sequi dolorem laboriosam repellat! Sunt
        ducimus eum corporis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quas sequi nesciunt possimus sint veniam, distinctio reiciendis ex
        harum, laudantium non eius atque iste vitae minus accusamus accusantium
        tempore impedit magni. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Quia laudantium excepturi, nisi ipsam qui
        reprehenderit temporibus commodi voluptates quaerat quidem odio animi
        minus, iure neque deleniti dolore id nihil fuga!
      </p>
    </div>
  );
};

export default Post;
