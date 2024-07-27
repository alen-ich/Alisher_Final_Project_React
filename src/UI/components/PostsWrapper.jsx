import { Post } from "./Post.jsx";
import { SkeletonLoader } from "./SkeletonLoader.jsx";
import { Categories } from "../components/Categories.jsx";
import { SearchBar } from "./SearchBar.jsx";

import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

export const PostsWrapper = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(10);

  useEffect(() => {
    const fetchQuotes = async () => {
      const fetchQuote = async () => {
        const response = await fetch(
          "https://free-quotes.vercel.app/api/random"
        );
        const result = await response.json();
        return result;
      };

      try {
        const promises = Array.from({ length: 20 }, fetchQuote);
        const results = await Promise.all(promises);
        setQuotes(results.map((result) => result.data));
      } catch (error) {
        alert("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [currentPage]);

  const searchByQuote = async (tag) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://free-quotes.vercel.app/api/search/tag/` + tag
      );
      let result = await response.json();

      setQuotes(result.data);
      setCurrentPage(1);
    } catch (error) {
      alert("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const searchByKeyWord = async (word) => {
    setLoading(true);
    if (word === "") {
      try {
        const fetchQuotes = async () => {
          const fetchQuote = async () => {
            const response = await fetch(
              "https://free-quotes.vercel.app/api/random"
            );
            const result = await response.json();
            return result;
          };

          try {
            const promises = Array.from({ length: 20 }, fetchQuote);
            const results = await Promise.all(promises);
            setQuotes(results.map((result) => result.data));
          } catch (error) {
            alert("Error fetching data", error);
          } finally {
            setLoading(false);
          }
        };

        fetchQuotes();
      } catch (error) {
        alert("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    try {
      let response = await fetch(
        `https://free-quotes.vercel.app/api/search/` +
          encodeURIComponent(word.trim())
      );
      let result = await response.json();

      if (result.data && Array.isArray(result.data)) {
        setQuotes(result.data);
        setCurrentPage(1);
      } else {
        setQuotes([]);
      }
    } catch (error) {
      alert("Error fetching data", error);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="posts-wrapper">
      <div className="posts-wrapper-quotes">
        <div className="search">
          <SearchBar searchByKeyWord={searchByKeyWord} />
        </div>
        <ul className="posts-wrapper-results">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          ) : currentQuotes.length > 0 ? (
            currentQuotes.map((quote) => <Post key={uuid()} quote={quote} />)
          ) : (
            <div className="no-quote">
              <div>There are no quotes that contain your phrase.</div>
              <div>Try again with a different phrase or words.</div>
            </div>
          )}
        </ul>
        {/* Pagination buttons */}
        {quotes.length > quotesPerPage && (
          <div className="pagination">
            {Array.from({
              length: Math.ceil(quotes.length / quotesPerPage),
            }).map((_, index) => (
              <div
                className="pagination-btns"
                key={index}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>

      <Categories searchByQuote={searchByQuote} />
    </div>
  );
};
