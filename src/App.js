import './App.css';
import Footer from "./components/footer.js";
import News from "./components/news.js";
import Header from "./components/header";


function App() {
  return (
    <div className="App">     
       
       <div className="container">
          <Header />  
          <News />  
          <Footer />  
       </div>     
    
    </div>
  );
}

export default App;
