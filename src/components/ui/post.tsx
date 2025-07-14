import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";

type TocItem = {
  id: string;
  text: string | null;
  level: string;
};

type PostProps = {
  title: string;
  cover: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ title, cover, content }) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [showToc, setShowToc] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current && content) {
      const headings = contentRef.current.querySelectorAll<HTMLHeadingElement>(
        "h1, h2, h3, h4, h5, h6"
      );

      const items: TocItem[] = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
          id,
          text: heading.textContent,
          level: heading.tagName.toLowerCase(),
        };
      });

      setTocItems(items);
    }
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll<HTMLHeadingElement>(
        "h1, h2, h3, h4, h5, h6"
      );

      let currentHeading = "";

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentHeading = heading.id;
        }
      });

      setActiveHeading(currentHeading);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      setShowToc(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 mt-8">
          <div className="lg:hidden px-6">
            <button
              onClick={() => setShowToc((prev) => !prev)}
              className="text-sm text-blue-600 underline mb-4"
            >
              {showToc ? "Hide Table of Contents" : "Show Table of Contents"}
            </button>

            {showToc && (
              <div className="bg-white rounded-lg shadow-lg p-4 mt-2">
                <h3 className="text-base font-medium text-gray-800 mb-3">
                  Table Of Contents
                </h3>
                <ul className="space-y-2">
                  {tocItems.map((item) => (
                    <li key={item.id} className="text-sm">
                      <button
                        onClick={() => scrollToHeading(item.id)}
                        className={`text-left w-full text-gray-600 hover:text-book-secondary/100 transition-colors ${
                          activeHeading === item.id
                            ? "text-blue-600 font-semibold"
                            : ""
                        } ${item.level === "h3" ? "pl-4" : ""} ${
                          item.level === "h4" ? "pl-6" : ""
                        } ${item.level === "h5" ? "pl-8" : ""} ${
                          item.level === "h6" ? "pl-10" : ""
                        }`}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <article className="lg:col-span-3 p-6 sm:p-10">
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-8">
                {title}
              </h1>
            </header>
            <div className="mb-8">
              <img
                src={cover}
                alt="Hero"
                className="w-full h-[30rem] object-cover rounded-lg"
              />
            </div>
            <div
              ref={contentRef}
              className="markdown-content [&_h1]:scroll-mt-36 [&_h2]:scroll-mt-36 [&_h3]:scroll-mt-36 [&_h4]:scroll-mt-36 [&_h5]:scroll-mt-36 [&_h6]:scroll-mt-36"
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            />
          </article>

          <aside className="hidden lg:block lg:col-span-1 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-[150px]">
              <h3 className="text-lg font-light text-gray-800 mb-6">
                Table Of Contents
              </h3>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id} className="text-sm">
                    <button
                      onClick={() => scrollToHeading(item.id)}
                      className={`text-left w-full text-gray-600 hover:text-book-secondary/100 transition-colors ${
                        activeHeading === item.id
                          ? "text-blue-600 font-semibold"
                          : ""
                      } ${item.level === "h3" ? "pl-4" : ""} ${
                        item.level === "h4" ? "pl-6" : ""
                      } ${item.level === "h5" ? "pl-8" : ""} ${
                        item.level === "h6" ? "pl-10" : ""
                      }`}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Post;
