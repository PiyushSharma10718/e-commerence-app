import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta
            officia eveniet eos! Ipsum voluptate placeat consequuntur
            dignissimos tenetur adipisci praesentium harum aliquam qui, mollitia
            maiores aspernatur voluptatum in dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
            eius sint maxime explicabo sed ducimus, id repellat libero error ex
            labore ratione cupiditate dolorum culpa. Culpa, sapiente! At, totam?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            quibusdam ducimus perspiciatis totam mollitia! Nisi ipsum tempora
            eveniet, quis sed ipsam perspiciatis illum dolorum earum at
            inventore est quos aut.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            facilis rem ullam ipsum. Quas voluptatem quidem tempore optio unde!
            Incidunt, dolore inventore quas eum deleniti eius consequuntur saepe
            quo asperiores.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            laboriosam corporis aut nobis eos aliquam odio quas quasi? Fugit
            voluptatum reprehenderit similique distinctio. Dolorem quidem ea
            voluptatum fugiat incidunt dolores!.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            itaque et ipsa delectus esse libero error vero asperiores
            repellendus quod qui voluptates molestiae aperiam consequatur quos
            officia, quaerat accusantium architecto.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
