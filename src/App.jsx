import Navbar from "./components/navbar/Navbar";
import Naviwin from "./components/naviwin/Naviwin"
import Form1 from "./components/form1/Form1";
import Form2 from "./components/form2/Form2";
import Form3 from "./components/form3/Form3";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Form1/>
        <Form2/>
        <Form3/>
      </div>
    </div>
  );
}

export default App;
