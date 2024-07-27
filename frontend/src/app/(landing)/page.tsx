const page = () => {
  return (
    <>
      <div className="wrapper"></div>
      <header className="header">
        <div className="container header__container">
          <a href="#" className="logo header_container__logo">
            LOGO
          </a>
          <ul>
            <li>Login</li>
          </ul>
        </div>
      </header>
      <main className="main">
        <section className="main__one">
          <h1>Secure Your Files with Blockchain</h1>
          <div className="column main__one__column">
            <p>
              Experience the next level of data security and privacy with our
              decentralized drive.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            className="column main__one__column fromkit-form"
          >
            <button
              type="button"
              className="formkit-submit formkit-submit"
              style={{
                color: "#fff",
                backgroundColor: "#5e4bec",
                borderRadius: "4 !important",
                fontWeight: 700,
                border: 0,
              }}
            >
              Login
            </button>
          </div>
        </section>
        <section className="main__two">
          <div className="container main__two__container">
            <h2>What is block chain</h2>
            <div className="column main__two__column">
              <h3>Create an Account</h3>
              <p>
                Sign up for a new account to start using our decentralized
                drive. Connect your wallet for secure authentication.
              </p>
            </div>
            <div className="column main__two__column">
              <h3>Upload Files</h3>
              <p>
                Easily upload your files to our decentralized drive. Your data
                is encrypted and securely stored on the blockchain.
              </p>
            </div>
            <div className="column main__two__column">
              <h3>Share Files (Optional)</h3>
              <p>
                Share your files with others securely and easily. Control who
                has access to your data with blockchain-based permissions.
              </p>
            </div>
          </div>
        </section>
        <section className="main__three"></section>
      </main>
      <footer className="footer">
        <div className="container footer__container">
          <p> &copy; copyright 2024</p>
        </div>
      </footer>
    </>
  );
};

export default page;
