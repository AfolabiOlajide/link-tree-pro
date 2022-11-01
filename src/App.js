import Header from "./components/Header";
import Footer from "./components/Footer";
import LinkComponent from "./components/LinkComponent";
import "./index.css";

import ProfileImg from "./assets/profile_img.jpeg"
import GitHub from "./assets/github_logo.png";
import Slack from "./assets/slack_logo.png";

function App() {
  return (
    <main className="App min-h-[100vh]">
      <div className="w-[80%] mx-auto mt-10">
        {/* header */}
        <Header image={ProfileImg} name="officialCipherr" />
        {/* Links */}
        <LinkComponent id="twiter" link="https://twitter.com/officialCipherr" content="Twitter Link" />
        <LinkComponent id="btn_zuri" link="https://training.zuri.team/" content="Zuri Team" />
        <LinkComponent id="books" link="http://books.zuri.team/" content="Zuri Books" />
        <LinkComponent id="books_python" link="https://books.zuri.team/python-for-beginners?ref_id=cipherr" content="Python Books" />
        <LinkComponent id="pitch" link="https://background.zuri.team/" content="Background Check for Coders" />
        <LinkComponent id="book_design" link="https://books.zuri.team/design-rules" content="Design Books" />
        {/* icons */}
        <div className="iocns flex justify-center space-x-4 my-12">
          <img className="w-8" src={Slack} alt="" />
          <img className="w-8" src={GitHub} alt="" />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
