import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/ContactUs";
import News from "./pages/News";
import UniversitiesGuide from "./pages/UniversitiesGuide";
import EquivalentCertificatesCalculator from "./pages/EquivalentCertificatesCalculator";
import AdmissionStatus from "./pages/AdmissionStatus";
import ContactUs from "./pages/ContactUs";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="news" element={<News />} />
      <Route path="universitiesGuide" element={<UniversitiesGuide />} />
      <Route
        path="equivalentCertificatesCalculator"
        element={<EquivalentCertificatesCalculator />}
      />
      \
      <Route path="admissionStatus" element={<AdmissionStatus />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
