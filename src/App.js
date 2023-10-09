import TextSlot from './components/TextSlot';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextSlot label="Nome"/>
      <TextSlot label="Cargo"/>
      <TextSlot label="Imagem"/>
    </div>
  );
}

export default App;
