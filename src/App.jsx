import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configureToasts, toastContainerProps } from "./utils/toastConfig";
import ContactListPage from "./pages/ContactListPage";
import ContactInfoPage from "./pages/ContactInfoPage";
import NotFoundPage from "./pages/NotFoundPage";

configureToasts();

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ContactListPage />} />
          <Route path="/contact/:id" element={<ContactInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer {...toastContainerProps} />
      </div>
    </Router>
  );
}

export default App;
