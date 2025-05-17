import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Thanks from "./pages/Thanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "category/:id", element: <Category /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "thanks", element: <Thanks/>},
      // { path: "*", element: <NotFound /> },
      { path: "*", element: <Navigate to="/"/> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "cart",
//     element: (
//       <>
//         <Header />
//         <Cart />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "categories",
//     element: (
//       <>
//         <Header />
//         <Categories />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "product",
//     element: (
//       <>
//         <Header />
//         <ProductDetails />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//         <Footer />
//       </>
//     ),
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
