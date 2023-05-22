import Tilt from "react-tilting";
// import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  // index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.5)}>
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
    // </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        > */}
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following projects serve as a testament to my skills and
          expertise, showcasing real-world examples of my work. Each project is
          accompanied by concise descriptions, as well as links to the
          corresponding code repositories and live demos.
          <br />
          <br />
          They provide a comprehensive demonstration of my proficiency in
          solving intricate problems, adeptness with diverse technologies, and
          effective project management capabilities. These personal projects not
          only highlight my past accomplishments but also underscore my
          dedication to continuous learning and exploration of different
          technologies in the realm of web application development.
          {/* </motion.p> */}
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
