import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainImage from './components/MainImage'
import Specials from './components/Specials'
import FoodItems from './components/FoodItems'
import FoodItem from './components/FoodItem'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <MainImage />
        <Specials />
        <FoodItems />
        <Footer />
      </header>
    </div>
  )
}

export default App
