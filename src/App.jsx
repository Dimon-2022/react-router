import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "categories", element: <Categories /> },
      { path: "product", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
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
