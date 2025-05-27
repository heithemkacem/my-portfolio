import Image from "next/image";
import React from "react";
import Link from "next/link";

const WorkCard = ({ img, name, description, onClick, id }) => {
  return (
    <Link href={id ? `/project/${id}` : "#"} passHref>
      <a className="block">
        <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 cursor-pointer">
          <div
            className="relative rounded-lg overflow-hidden w-full"
            style={{ height: "300px" }}
          >
            {img && (
              <Image
                src={img}
                alt={name || "Project Image"}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-out hover:scale-110"
                priority={true}
              />
            )}
          </div>
          <h1 className="mt-5 text-3xl font-medium">
            {name || "Project Name"}
          </h1>
          <h2 className="text-xl opacity-50">{description || "Description"}</h2>
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
