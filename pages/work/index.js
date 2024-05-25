import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              animate="show"
              initial="hidden"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              animate="show"
              initial="hidden"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              1. Pet Services App <br />
              2. Food Delivery App <br />
              3. Social Media App <br />
              4. Video Recording and Upload App <br />
              5. Opinion Trading Website <br />
              6. Car Service Admin Panel Website <br />
              7. Blog Website <br />
              8. Movie DB Website using Laravel <br />
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            animate="show"
            initial="hidden"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

