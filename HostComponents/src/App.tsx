import './index.css';
import Button from './button';
import Card from "./card"

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button title='test'></Button>
      <br />
      <br />
      <Card></Card>
    </div>
  );
};

export default App;
