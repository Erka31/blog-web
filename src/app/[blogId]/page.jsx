"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Parent } from "../providers/Header";

const Page = () => {
  const [blog, setBlog] = useState("");
  const pathName = usePathname();
  const api = async () => {
    const fetchData = await fetch(`https://dev.to/api/articles/${pathName}`);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    setBlog(jsonData);
  };
  useEffect(() => {
    api();
  }, []);

  if (blog.length == 0) return "Loading...";
  return (
    <Parent>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="infoPage">
          <div>
            <h3 className="infoTitle">{blog.title}</h3>
            <div className="infoProfile">
              <div>
                <img className="person2" src={blog.user.profile_image_90} />
              </div>
              <div className="infoName">{blog.user.name}</div>
              <div className="infoDate">{blog.readable_publish_date}</div>
            </div>
            <div>
              <img className="infoImg" src={blog.social_image} />
            </div>
            <div className="infoDescription">{blog.description}</div>
            <div className="infoUser">
              <div>Twitter_name: {blog.user.twitter_username}</div>
              <div>Github_name: {blog.user.github_username}</div>
            </div>
          </div>
        </div>
      </div>
    </Parent>
  );
};

export default Page;
