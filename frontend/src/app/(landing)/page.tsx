"use client";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <div className="wrapper"></div>
      {/* <header className="header"> */}
      {/* <div className="container header__container">
          <a href="/" className="logo header_container__logo">
            LOGO
          </a>
          <ul>
            <li>
              <a href="/auth/login">Login</a>
            </li>
          </ul>
        </div> */}
      {/* </header> */}
      <main className="main">
        <section className="main__one">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="animated-text"
          >
            Secure Your Files with Blockchain{" "}
          </motion.h1>
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
            {/* <a className="cta-button" href="/auth/login">
                Get Started
              </a> */}

            <a
              className="formkit-submit formkit-submit"
              href="/auth/login"
              style={{
                display: "flex",
                justifyContent: "center",

                color: "#fff",
                backgroundColor: "#5e4bec",
                borderRadius: 10,
                fontWeight: 700,
                border: 0,
              }}
            >
              Get start
            </a>
          </div>
        </section>
        <section className="main__two">
          <div className="container main__two__container">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              What is block chain
            </motion.h2>
            <div className="column main__two__column">
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                What is block chain
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Blockchain is a decentralized digital ledger that records
                transactions across multiple computers securely and
                transparently. Each transaction is stored in a "block" and
                linked to the previous one, forming a "chain."
              </motion.p>
            </div>
            <div className="column main__two__column">
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Create an Account
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Sign up for a new account to start using our decentralized
                drive. Connect your wallet for secure authentication.
              </motion.p>
            </div>
            <div className="column main__two__column">
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Upload Files
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Easily upload your files to our decentralized drive. Your data
                is encrypted and securely stored on the blockchain.
              </motion.p>
            </div>
            <div className="column main__two__column">
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Share Files (Optional)
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Share your files with others securely and easily. Control who
                has access to your data with blockchain-based permissions.
              </motion.p>
            </div>
          </div>
        </section>
        <section className="main__three">
          <div className="container main__tree__container">
            <h2>Who's behind this?</h2>
            <p className="subtext">
              We're a team of creators building on the web full-time. You might
              have seen our work:
            </p>
          </div>
          {[
            {
              image: "/p2.jpg",
              name: "Nilesh Nannaware",
              linkedin:
                "https://www.linkedin.com/in/nilesh-nannaware-428769237",
              // bio: `My name is Nilesh Nannaware a highly skilled cloud engineer focusing on GCP (Google cloud platform) I am good at like deploying and managing cloud based solutions`,
            },
            {
              image: "/p3.jpg",
              name: "Tushar Ramteke",
              linkedin:
                "https://www.linkedin.com/in/tushar-ramteke-9983012b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // bio: `Java and Full Stack Developer experienced in creating and maintaining both the front and back ends of web applications. Skilled in delivering effective, user-friendly solutions and solving technical problems.`,
            },
            {
              image: "/p1.jpg",
              name: "Niyati Niwal",
              linkedin:
                "https://www.linkedin.com/in/niyati-niwal-50b9b6257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // bio: `Myself Niyati Niwal, I am pursuing a degree in Information Technology,  I'm excited to launch my career in software development. During my studies, I gained hands-on experience in programming languages such as Java, C++, and Python, as well as web development technologies like HTML, CSS, and JavaScript.`,
            },
          ].map((v, i) => (
            <div
              key={i + "ss"}
              className="testimonial main__three__testimonial"
            >
              <div className="container main__three__testimonial__container">
                <div className="column main__three__testimonial__container__column">
                  <div className="citation main__three__testimonial__container__column__citation">
                    <div className="avatar main__three__testimonial__container__column__citation__avatar">
                      <img
                        src={v.image}
                        width="80"
                        height="80"
                        alt="Web Developer"
                      />
                    </div>
                    <div className="name main__three__testimonial__container__column__citation__name">
                      <h3>{v.name}</h3>
                      <p>
                        <a href={v.linkedin} target="_blank">
                          LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="column main__three__testimonial__container__column">
                  <p>{v.bio}</p>
                </div> */}
              </div>
            </div>
          ))}
        </section>
        <section className="main__three__2">
          <div className="container main__tree__container">
            <h2>FAQ</h2>
            {/* <p className="subtext">
              We're a team of creators building on the web full-time. You might
              have seen our work:
            </p> */}
          </div>
          {[
            {
              name: "How does blockchain secure file storage?",
              bio: `Blockchain ensures secure file storage through encryption, decentralization, and immutability. Files are stored in distributed networks, making unauthorized access nearly impossible.`,
            },
            {
              name: "Can I share files securely using blockchain?",
              bio: `Yes, blockchain allows users to share files securely using smart contracts and access control mechanisms, ensuring only authorized users can access them.`,
            },
            {
              name: "What happens if I lose access to my blockchain-based drive?",
              bio: `Since blockchain is decentralized, access recovery depends on private keys. It’s crucial to back up keys securely as losing them could result in permanent data loss.`,
            },
            {
              name: "How does blockchain prevent file tampering?",
              bio: `Every file stored on a blockchain is hashed, meaning any modification would change the hash value, making tampering easily detectable.`,
            },
            {
              name: "Is blockchain file storage expensive?",
              bio: `Costs depend on the platform used. Some blockchain storage solutions offer affordable decentralized options compared to traditional cloud services.`,
            },
            {
              name: "Can I store large files on blockchain?",
              bio: `Blockchain itself isn't ideal for large files, but hybrid solutions use blockchain for metadata and decentralized storage networks (like IPFS) for large files.`,
            },
            {
              name: "What are the benefits of using blockchain for file storage?",
              bio: `Enhanced security, immutability, no single point of failure, and better privacy controls compared to centralized cloud storage.`,
            },
            {
              name: "How does blockchain improve file access control?",
              bio: `Blockchain leverages smart contracts to grant and revoke access to files securely, ensuring only authorized users can retrieve data.`,
            },
          ].map((v, i) => (
            <div
              key={i + "ss"}
              className="testimonial main__three__testimonial"
            >
              <div className="container main__three__testimonial__container">
                <div className="column main__three__testimonial__container__column">
                  <div className="citation main__three__testimonial__container__column__citation">
                    {/* <div className="avatar main__three__testimonial__container__column__citation__avatar">
                      <img
                        src={v.image}
                        width="80"
                        height="80"
                        alt="Web Developer"
                      />
                    </div> */}
                    <div className="name main__three__testimonial__container__column__citation__name">
                      <h3>
                        {i + 1}) {v.name}
                      </h3>
                      {/* <p>
                        <a href={v.linkedin} target="_blank">
                          LinkedIn
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="column main__three__testimonial__container__column">
                  <p>{v.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
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
