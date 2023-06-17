import Content from "@/components/Content/Content";
import Layout from "@/components/Layout/Layout";
import { useLoadLSItemsToContext } from "@/hooks/localStorage";
import { useReadAndSetSystemTheme } from "@/hooks/systemTheme";
import { useSetCollapsedBasedOnWindowWidth } from "@/hooks/windowSize";

function App() {
  useReadAndSetSystemTheme();
  useLoadLSItemsToContext();
  useSetCollapsedBasedOnWindowWidth();

  return (
    <div className="container w-full md:max-w-none lg:container font-inter">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
