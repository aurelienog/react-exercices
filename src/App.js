import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';


const users = [
  {
    user: {
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height: 178,
      birth: "1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    }},
  {
    user: {
      lastName:'Delores ',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth: "1992-07-14",
      picture:"https://randomuser.me/api/portraits/women/44.jpg",
    }},
  
];

function App() {
  return (
    <div className="App">
      <div className='inline-block mx-auto w-[30%]'>
          
          { users.map(user => ( <IdCard  {...user} />))}
      </div>
      
    </div>
  );
}

export default App;
