import { useState } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <nav>
                    <Container />
                </nav>
            </main>
            <footer></footer>
        </>
    );
}
