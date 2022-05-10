import { Routes, Route } from "react-router";
import Layout from "./Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default AppRoutes;
