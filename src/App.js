import "./styles.css";
import Contact from "./components/Contact.js";

const names = [
  {firstName:"Mark", lastName:"Zuckerberg"}, 
  {firstName:"Tim", lastName:"Cool"}, 
  {firstName:"Jeff", lastName:"Bezos"}, 
  {firstName:"Elon", lastName:"Musk"}
];

export default function App() {
  return (
    <div className="App">
      {names.map((contact) => {
        return <Contact contactName={contact} />;
      })}
    </div>
  );
}
