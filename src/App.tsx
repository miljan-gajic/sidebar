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
    <main className="container w-full md:max-w-none lg:container font-inter">
      <Layout>
        <Content />
      </Layout>
    </main>
  );
}

export default App;
