import { Disclosure, Transition } from "@headlessui/react";
import Video from "./video";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PopupWidget(props: {data: string, icon: JSX.Element, type: string, name: string}) {
  const codeString = `function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) =&gt; {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children =&gt; {
      childrenCount += 1;
      return children.map((child, i) =&gt; createElement({
        node: child,
        style,
        useInlineStyles,
        key:
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return &lt;TagName key={key} {...props}&gt;{children}&lt;/TagName&gt;;
    }
  }
    `;
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="z-40 flex mx-auto items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-10 h-10 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                {props.icon}
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed z-50 top-1/4 left-1/4 w-1/2 h-1/2"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Disclosure.Panel
                className=" flex flex-col text-light-headline overflow-hidden left-0 h-full w-full
               border border-gray-300 dark:border-gray-800 bg-dark-background shadow-2xl rounded-md"
              >
                <Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-200 transform ease"
                    enterFrom="opacity-0 rotate-45 scale-75"
                    leave="transition duration-100 transform ease"
                    leaveTo="opacity-0 rotate-45"
                    className="absolute right-2 top-2 w-6 h-6 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>{" "}
                  </Transition>
                </Disclosure.Button>
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <h3 className="text-xl font-bold">{props.name}</h3>
                  <p>Solution video</p>
                  <div className="">
                    <Video data={props.data} />
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
