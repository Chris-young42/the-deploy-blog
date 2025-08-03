"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "person",
    authorImg: "/author_img.png",
  });

  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewURL(url);

      // 清理对象 URL，避免内存泄漏
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "person",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Err");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">更新日志</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={previewURL || assets.upload_area}
            width={140}
            height={70}
            alt="my-blog"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 ">博客标题</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 py-3 border"
          type="text"
          placeholder="在此输入"
          required
        />
        <p className="text-xl mt-4 ">博客描述</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 py-3 border"
          type="text"
          placeholder="写下内容"
          rows={6}
          required
        />
        <p className="text-xl mt-4">博客种类</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">起步</option>
          <option value="Technology">技术栈</option>
          <option value="Lifestyle">生活随笔</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          添加
        </button>
      </form>
    </div>
  );
};

export default page;
