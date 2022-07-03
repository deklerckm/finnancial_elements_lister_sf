import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Layout from 'components/Layout/Layout';
// CONTAINERS
import Elements from 'containers/Elements';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Elements />} />
          <Route path="*" element={<Elements />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
