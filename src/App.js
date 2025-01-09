import './App.css';
import BoxColor from './components/color-box/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/Random/Random';
import IdCardList from './components/user-card/IdCardList';



function App() {
  return (
    <div className="App">
      <section>
        <IdCardList/>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
      <section className='flex gap-6 m-8 items-center'>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
      </section>
    </div>
  );
}

export default App;
