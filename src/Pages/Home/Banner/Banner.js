import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: "url(https://krozo.ibthemespro.com/img/banner/bg-2.jpg)"}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h4 className="mb-5 text-3xl">Hi there, I'm</h4>
      <h1 className="text-6xl font-bold text-white">Suraiya Akter</h1>
      <p className="my-5">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
      <button className="btn btn-primary">About Me</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
