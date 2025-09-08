import NavBar from "@/components/book/NavBar";
import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import content from "../markdown/communication-style-guide.md?raw";

function StyleGuide() {
  return (
    <div>
      <NavBar
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "#about" },
          { name: "Author", href: "#author" },
          { name: "Audience", href: "#audience" },
          { name: "FAQ", href: "#faq" },
        ]}
      />
      <main className="flex-grow pt-32 md:pt-24 lg:pt-12">
        <Post
          title={`The "Shift" Communication Style Guide: Talking Tech So People Listen`}
          content={content}
          cover={"/static/images/shift-graphic.png"}
        />
      </main>
      <Footer />
    </div>
  );
}

export default StyleGuide;
