import NavBar from "@/components/book/NavBar";
import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import content from "../markdown/vista-framework.md?raw";

function VistaFramework() {
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
          title={`The "Shift" Vista Framework`}
          content={content}
          cover={"/static/images/vista-framework.webp"}
        />
      </main>
      <Footer />
    </div>
  );
}

export default VistaFramework;
