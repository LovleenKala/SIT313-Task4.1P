import './App.css';
import CardList from './cardList';
import Header from './Header';
import Bottom from './bottom';
import Lovleen from './Lovleen';
import CardList123 from './CardList1';

function App() {
  return (
    <div>
      <Header/>
     <img src = {require('./deakin.jpg')} alt="chitkara" style={{width:'100%'}}/>
     <CardList/>
     <CardList123/>
     <staffList2/>
     <Bottom/>
     <Lovleen/>
    </div>
  );
}

export default App;
