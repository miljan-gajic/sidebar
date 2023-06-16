import Content from "@/components/Content/Content";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="container w-full md:max-w-none lg:container gap-4">
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
