import { Route, Routes } from 'react-router-dom';
import './App.css';
import PdfBuilder from './pages/pdf-builder';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PdfBuilder />} />
            </Routes>
        </>
    );
}

export default App;