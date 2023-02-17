import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryclient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
