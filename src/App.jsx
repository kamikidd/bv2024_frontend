import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Staffs from "./pages/Staffs/Staffs";
import StaffDetail from "./pages/Staffs/StaffDetail";
import Topics from "./pages/Topics/Topics";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NoMatch404 from "./pages/Others/NoMatch404";
import Imprint from "./pages/Others/Imprint";
import DataProtection from "./pages/Others/DataProtection";
import Header from "./pages/Others/Header";
import Footer from "./pages/Others/Footer";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import ScrollToTop from "../src/pages/Others/ScrollToTop";

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
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
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
        <ScrollToTop />
      </HashRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
