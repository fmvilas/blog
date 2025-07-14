import NavBar from "@/components/book/NavBar";
import Footer from "@/components/Footer";
import Post from "@/components/ui/post";
import content from "../markdown/shift.md?raw";

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
          cover={
            "https://plus.unsplash.com/premium_photo-1677087121653-467b46486335?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default StyleGuide;
