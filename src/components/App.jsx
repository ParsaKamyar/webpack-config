import '../styles/index.scss';
import Recipes from './Recipes';

export const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hellooo React</h1>
        </section>
      </main>
      <Recipes />
    </>
  );
};

export default App;
