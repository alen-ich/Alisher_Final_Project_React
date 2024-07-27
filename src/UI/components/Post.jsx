import { useEffect, useState } from "react";
import "./styles.css";

export const Post = ({ quote }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`post ${isVisible ? "visible" : ""}`}>
      <div className="img-and-author">
        <img
          src="https://pushinka.top/uploads/posts/2023-03/1679876768_pushinka-top-p-obichnie-avatarki-na-telefon-pinterest-4.jpg"
          className="post-img"
          alt="Author"
        ></img>
        <div className="name-and-tag">
          <p className="name">{quote.author}</p>
          <div className="tags">
            {quote.tags.map((tag, index) => (
              <p className="tag-space" key={index}>
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </div>

      <p className="quote">{quote.quote}</p>
    </div>
  );
};
