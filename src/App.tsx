import Content from "@/components/Content/Content";
import Layout from "@/components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="container w-full md:max-w-none lg:container font-inter">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
