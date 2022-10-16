import React from "react";
import Container from "./container";

export default function Benefits(props: {imgPos?: string, data: {image: string, title: string, desc: string, bullets: {title: string, icon?: string, desc: string}[]}}) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <img
              src={data.image}
              width="521"
              height="482"
              alt="Benefits"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight dark:text-light-headline text-dark-headline lg:leading-tight lg:text-4xl">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal dark:text-light-headline text-dark-headline lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props: {title: string, icon?: string, desc?: string, children: React.ReactNode}) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
         
        </div>
        <div>
          <h4 className="text-xl font-medium dark:text-light-headline text-dark-headline">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-light-headline text-paragraph">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
