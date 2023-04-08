import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Books from './Components/Books/Books';
import Book from './Components/Book/Book';
import BookDetails from './Components/BookDetails/BookDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),

      },
      {
        path: '/about',
        element: <About></About>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
