import { useEffect } from "react";

function useScrollAnimation(){

    useEffect(()=>{

        const elements = document.querySelectorAll(".reveal");


        const observer = new IntersectionObserver(
            (entries)=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold:0.15
            }
        );


        elements.forEach(el=>observer.observe(el));


        return ()=>{
            observer.disconnect();
        };


    },[]);

}


export default useScrollAnimation;