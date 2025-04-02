import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import Employee from './components/Employee'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />}> </Route>
          <Route path="/employees" element={<ListEmployee />}> </Route>
          <Route path="/add-employee" element={<Employee />} > </Route>
          <Route path="/update-employee/:id" element={<Employee />} > </Route>
          <Route path="/delete-employee/:id" element={<ListEmployee />} > </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
