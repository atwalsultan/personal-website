import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import DeveloperApp from './components/developer/DeveloperApp';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dev/*' element={<DeveloperApp />} />
			</Routes>
		</Router>
	);
}

export default App;
