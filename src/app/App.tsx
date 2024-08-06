import './styles/reset.css';
import './styles/index.css';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <Outlet />
        </div>
    );
};

export default App;
