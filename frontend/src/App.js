import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Layout from 'components/Layout/Layout';
// CONTAINERS
import Elements from 'containers/Elements';
import CreateElement from 'containers/CreateElement/CreateElement';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Elements />} />
          <Route path="/create" element={<CreateElement />} />
          <Route path="*" element={<Elements />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
