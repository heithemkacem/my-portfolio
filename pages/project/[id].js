import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import { useRouter } from "next/router";
import Link from "next/link";

// Local Data
import data from "../../data/portfolio.json";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the project with the matching id
  const project = data.projects.find((p) => p.id === id);

  // If project not found or page is still loading, show loading state
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>
          {project.title} | {data.name}
        </title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />

        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <Link href="/" passHref>
            <a className="block">
              <div className="flex items-center text-xl font-medium mb-8 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </div>
            </a>
          </Link>

          <h1 className="text-4xl laptop:text-6xl font-bold">
            {project.title}
          </h1>
          <h2 className="text-xl opacity-70 mt-2">{project.description}</h2>

          {/* Main Project Image */}
          <div className="relative w-full h-[300px] laptop:h-[500px] mt-8 rounded-xl overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>

          {/* Project Details */}
          <div className="mt-10 grid grid-cols-1 laptop:grid-cols-3 gap-10">
            <div className="laptop:col-span-2">
              <h3 className="text-2xl font-bold mb-4">About the Project</h3>
              <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
                {project.longDescription ? (
                  <p>{project.longDescription}</p>
                ) : (
                  <p>
                    This is a {project.description} project. Click the link
                    below to visit the live site.
                  </p>
                )}
              </div>

              {/* Project Architecture */}
              {project.architecture && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Additional Images Gallery */}
              {project.additionalImages &&
                project.additionalImages.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                      {project.additionalImages.map((img, index) => (
                        <div
                          key={index}
                          className="relative h-[200px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
                        >
                          <Image
                            src={img}
                            alt={`${project.title} image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            <div>
              {/* Project Info Sidebar */}
              <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Project Info
                </h3>

                {/* Visit Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button>Visit Project</Button>
                </a>

                {/* Tech Stack */}
                {project.techStack && (
                  <div className="mt-6">
                    <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Type */}
                <div className="mt-6">
                  <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                    Project Type
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Client */}
                {project.client && (
                  <div className="mt-6">
                    <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                      Client
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.client}
                    </p>
                  </div>
                )}

                {/* Year */}
                {project.year && (
                  <div className="mt-6">
                    <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">
                      Year
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.year}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
