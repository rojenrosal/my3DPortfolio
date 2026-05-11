import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const TechTile = ({ name, icon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.1, rotate: -3 }}
    className="flex flex-col items-center gap-2"
    title={name}
  >
    <div className="green-pink-gradient p-[2px] rounded-2xl shadow-card">
      <div className="bg-tertiary rounded-2xl w-24 h-24 flex items-center justify-center">
        <img
          src={icon}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
    <span className="text-secondary text-[12px] font-medium tracking-wide">
      {name}
    </span>
  </motion.div>
);

// eslint-disable-next-line react-refresh/only-export-components
const MoreTile = ({ index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ scale: 1.1, rotate: 3 }}
    className="flex flex-col items-center gap-2"
    title="Plus Python, Go, Rust, Three.js, Prisma, Supabase, Firebase, and more"
  >
    <div className="green-pink-gradient p-[2px] rounded-2xl shadow-card">
      <div className="bg-tertiary rounded-2xl w-24 h-24 flex items-center justify-center">
        <span className="text-white font-bold text-[22px] tracking-tight">
          &amp; more
        </span>
      </div>
    </div>
    <span className="text-secondary text-[12px] font-medium tracking-wide">
      Python, Go, Rust...
    </span>
  </motion.div>
);

const Tech = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className={styles.sectionHeadText}>TECHNOLOGIES</h3>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology, index) => (
          <TechTile
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
        <MoreTile index={technologies.length} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
