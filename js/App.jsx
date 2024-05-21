import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import Services from "./Services";
import Staffs from "./Staffs";
import StaffDetail from "./StaffDetail";
import Topics from "./Topics";
import Projects from "./Projects";
import Contact from "./Contact";
import NoMatch404 from "./NoMatch404";
import Imprint from "./Imprint";
import DataProtection from "./DataProtection";
import Header from "./Header";
import Footer from "./Footer";
import ProjectDetail from "./ProjectDetail";
const queryClient = new QueryClient({
  defautlOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <Header></Header>
          <Routes forceRefresh>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Dienstleistungen" element={<Services />}></Route>
            <Route path="/Dienstleistungen/:id" element={<Services />}></Route>
            <Route path="/Mitarbeitende" element={<Staffs />}></Route>
            <Route path="/Mitarbeitende/:id" element={<StaffDetail />} />
            <Route path="/Themen" element={<Topics />}></Route>
            <Route path="/Projekte" element={<Projects />}></Route>
            <Route path="/Projekte/:id" element={<Projects />}></Route>
            <Route path="/Projekt/:title" element={<ProjectDetail />}></Route>
            <Route path="/Kontakt" element={<Contact />}></Route>
            <Route path="/Imprint" element={<Imprint />}></Route>
            <Route path="/DataProtection" element={<DataProtection />}></Route>
            <Route path="*" element={<NoMatch404 />}></Route>
          </Routes>
          <Footer></Footer>
        </QueryClientProvider>
      </HashRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
