import React from "react";

const About = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col w-full lg:flex-row place-items-center p-2" >
        <div className="grid flex-grow card place-items-center w-full p-8">
          <img
            className="border-8 border-white"
            src="https://krozo.ibthemespro.com/img/about/about-1.jpg" alt="" 
          />
        </div>
        <div className="p-8">
          <h3 className="text-5xl font-bold py-4">Suraiya Akter</h3>
          <h5 className="text-2xl">A front-end developer in Bangladesh</h5>
          <p className="py-6">
            Hi, I'm a react developer and also a student. I am interested in solving new problems. I'm also interested in design and develop stylish, modern websites, web services and
            online stores. </p>
          <p>
            I love to travel many places and one day I will go for a world tour, It's my dream. I am practising to be a hardworking, dedicated web developer. I want to use my time properly, so I focus to my time management daily.
            I want to be a honest, modest, punctual, hardworking, focused, dedicated person in my personal life.
          </p>

          <div className="flex flex-col w-full lg:flex-row my-4 border-4">
            <div className="grid flex-grow card place-items-center">
              <p>Birthday: 16 August, 1998</p>
              <p>Age: 24 Years</p>
              <p>Address: Khulna, Bangladesh</p>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid flex-grow h-32 card place-items-center">
              <p>Email: suraiyaaktertrishna@gmail.com</p>
              <p>GitHub: https://github.com/SuraiyaAkterTrishna</p>
              <p>Freelance: Available</p>
            </div>
          </div>
          <button className="btn btn-primary">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
