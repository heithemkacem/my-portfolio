import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="mt-4 flex flex-wrap gap-6">
                  {resume.languages && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">Languages</h2>
                      <ul className="list-disc mt-2">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-1">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.frameworks && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">Frameworks</h2>
                      <ul className="list-disc mt-2">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-1">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.architectures && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">Architectures</h2>
                      <ul className="list-disc mt-2">
                        {resume.architectures.map((arch, index) => (
                          <li key={index} className="ml-5 py-1">
                            {arch}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.clouds_and_databases && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">
                        Clouds & Databases
                      </h2>
                      <ul className="list-disc mt-2">
                        {resume.clouds_and_databases.map((item, index) => (
                          <li key={index} className="ml-5 py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.web_technologies && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">
                        Web Technologies
                      </h2>
                      <ul className="list-disc mt-2">
                        {resume.web_technologies.map((tech, index) => (
                          <li key={index} className="ml-5 py-1">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.developer_tools && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">Developer Tools</h2>
                      <ul className="list-disc mt-2">
                        {resume.developer_tools.map((tool, index) => (
                          <li key={index} className="ml-5 py-1">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {resume.others && (
                    <div className="min-w-[200px]">
                      <h2 className="text-lg font-semibold">Others</h2>
                      <ul className="list-disc mt-2">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-1">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
