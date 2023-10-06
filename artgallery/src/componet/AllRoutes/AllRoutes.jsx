import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Product from "../Pages/Product"
import { Error } from "../Pages/Error"
import { SingleProduct } from "../Pages/SingleProduct"

 export const AllRoutes=() => {
    return(
        <Routes>
                  < Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  < Route path="/contact" element={<Contact/>} />
                  <Route path="/product" element={<Product/>} />
                  <Route path="*" element={<Error/>}/>
                  <Route path="/product/:id" element={<SingleProduct />}></Route>
        </Routes>
        )
    
} 