import '../src/styles/App.css';

import HeaderContent from './Components/HeaderContent';
import BodyContent from './Components/BodyContent';
import ProjectContent from './Components/ProjectContent';
import FooterContent from './Components/FooterContent'

function App() {
  return (
    <div className="App">
      <HeaderContent />
      <BodyContent />
      {/* <ProjectContent />
      <FooterContent /> */}
    </div>
  );
}

export default App;
