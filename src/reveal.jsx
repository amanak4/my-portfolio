import { useAnimation,motion, useInView} from "framer-motion";
import React, { useEffect, useRef } from "react";
// import "./reveal.css"
export default function Reveal({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animation = useAnimation();
  const slidecontrol = useAnimation();
    useEffect(() => {
        if (isInView) {
            animation.start("visible");
            slidecontrol.start("visible");
        }
// else{
//         animation.start("hidden");
// }
    }, [isInView, animation]);

    return (
        <div>
        <motion.div
            ref={ref}
            animate={animation}
            initial="hidden"
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
            }}
            transition={{ duration: 0.5 , delay:0.25}}
            className="reveal"
        >
           {children}
        </motion.div>
        {/* <motion.div 
        animate={slidecontrol}
        initial="hidden"
        variants={{
            visible: { left:0},
            hidden: { left:"100%" },
        }}
        transition={{ duration: 0.5 ,ease:"easeIn"}}
        // style={
        //     {
        //         position:"absolute",
        //         top:4,
        //         bottom:4,
        //         left:0,
        //         right:0,
        //         background:"voliette",
        //         zIndex:20,
        //     }
        // }
        >
           {children}
        </motion.div> */}
        </div>
    );
}
