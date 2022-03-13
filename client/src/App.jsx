import { Footer, Navbar, Services } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Services />
      <Footer />
    </div>
  );
};

export default App;
