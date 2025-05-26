import Image from "next/image";
import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden w-full"
        style={{ height: "fit-content" }}
      >
        {img && (
          <Image
            src={img}
            alt={name || "Project Image"}
            fill
            className="object-cover transition-transform duration-300 ease-out hover:scale-110"
            priority
            width={900}
            height={500}
          />
        )}
      </div>
      <h1 className="mt-5 text-3xl font-medium">{name || "Project Name"}</h1>
      <h2 className="text-xl opacity-50">{description || "Description"}</h2>
    </div>
  );
};

export default WorkCard;
