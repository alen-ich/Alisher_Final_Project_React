import "./styles.css";

export const Header = () => {
  const toggleModal = () => {};

  return (
    <div className="header">
      <div className="logo">
        <div className="header-quote-container">
          <p
            className="header-quote"
            style={{ fontFamily: "Times, Times New Roman, serif" }}
          >
            "Words that echo"
          </p>
        </div>
      </div>
      <div className="log-out" onClick={() => toggleModal(true)}>
        <img
          src="https://pushinka.top/uploads/posts/2023-03/1679876768_pushinka-top-p-obichnie-avatarki-na-telefon-pinterest-4.jpg"
          className="user-icon"
        ></img>
      </div>
    </div>
  );
};
