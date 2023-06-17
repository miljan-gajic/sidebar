import Content from "@/components/Content/Content";
import Layout from "@/components/Layout/Layout";
import { useReadAndSetSystemTheme } from "./hooks/systemTheme";
import { useUI } from "./hooks/uiContext";

function App() {
  useReadAndSetSystemTheme();

  const {
    state: { activeMenuItem },
  } = useUI();
  return (
    <div className="container w-full md:max-w-none lg:container font-inter">
      <Layout>
        <Content contentToDisplay={activeMenuItem} />
      </Layout>
    </div>
  );
}

export default App;
