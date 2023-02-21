import { useState } from 'react';
import './App.css';
import Catalog from './Components/Catalog/Catalog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <Navigation />
                <Catalog />
            </main>
            <Footer />
        </>
    );
}
