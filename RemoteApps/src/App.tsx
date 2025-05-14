import './App.css';
// The remote component provided by federation_provider
import ProviderButton from 'federation_provider/button';
import ProviderCard from 'federation_provider/card';


const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
        <ProviderCard></ProviderCard>
      </div>
    </div>
  );
};

export default App;
