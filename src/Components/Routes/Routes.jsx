import { Route, Routes } from "react-router-dom";
import { Create } from "../CreatePage";
import { Home } from "../HomePage";
import { ListingDetails } from "../listingDetails";
import { Navbar } from "../Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/create" element={<Create />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </>
  );
};
