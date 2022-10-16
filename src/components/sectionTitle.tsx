import React from "react";
import Container from "./container";

export default function SectionTitle(props : {align?: string, pretitle: string, title: string, children: React.ReactNode}) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 bg-dark-background dark:bg-light-background ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-light-headline dark:text-dark-headline uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-light-headline dark:text-dark-headline lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-light-headline dark:text-dark-headline lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
}
