import { motion } from "framer-motion";
export const LineTime = () => {
  return (
    <>
      <div className="line-time w-full pt-8 ">
        <div className="container-line-time w-[92%] relative m-auto h-[640px] flex flex-col justify-center gap-6 md:max-w-7xl md:h-[460px]  ">
          <h2 className="  text-xl  font-bold -top-8  md:text-4xl absolute  md:-top-8 mt-5 ">
            Mi historia
          </h2>
          <div className="linea  bg-gray-400 "></div>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text   ml-6 rounded-lg   text-xs text-center px-2 md:absolute md:top-10 md:left-0 md:w-[45%] md:p-10 md:text-base ">
              1.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text  ml-6 rounded-lg   text-xs text-center px-2 md:absolute md:right-5 md:top-16 md:w-[45%] md:p-10  md:text-base ">
              2.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>

          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text  ml-6 rounded-lg   text-xs text-center px-2 md:absolute md:left-0 md:top-40 md:w-[45%] md:p-10 md:text-base ">
              3.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>

          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text ml-6 rounded-lg   text-xs text-center px-2 md:absolute md:right-5 md:top-48 md:w-[45%] md:p-10 md:text-base  ">
              4.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>

          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3.5 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text  ml-6 rounded-lg   text-xs text-center px-2 md:absolute md:left-0 md:top-72 md:w-[45%] md:p-10 md:text-base ">
              5.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 4 } }}
            viewport={{ once: true }}
          >
            <article className="item-history h-[75px] w-[85%] flex justify-center items-center color-text  ml-6 rounded-lg  text-xs text-center px-2 md:absolute md:right-5 md:top-[320px] md:w-[45%] md:p-10 md:text-base  ">
              6.- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Itaque, labore.
            </article>
          </motion.article>
        </div>
      </div>
    </>
  );
};
