import React from "react";
import "./singlePost.css";

const SinglePosts = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="singlepostimg"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <strong>Mücahit</strong>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          excepturi consequuntur id ipsa ipsum fugit repellendus aspernatur eum
          tempora, eveniet impedit libero commodi. Voluptatem possimus vero,
          sint ullam fugiat sapiente. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam excepturi consequuntur id ipsa ipsum fugit
          repellendus aspernatur eum tempora, eveniet impedit libero commodi.
          Voluptatem possimus vero, sint ullam fugiat sapiente. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Veniam excepturi
          consequuntur id ipsa ipsum fugit repellendus aspernatur eum tempora,
          eveniet impedit libero commodi. Voluptatem possimus vero, sint ullam
          fugiat sapiente. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Veniam excepturi consequuntur id ipsa ipsum fugit repellendus
          aspernatur eum tempora, eveniet impedit libero commodi. Voluptatem
          possimus vero, sint ullam fugiat sapiente. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veniam excepturi consequuntur id ipsa
          ipsum fugit repellendus aspernatur eum tempora, eveniet impedit libero
          commodi. Voluptatem possimus vero, sint ullam fugiat sapiente.
        </p>
      </div>
    </div>
  );
};

export default SinglePosts;
