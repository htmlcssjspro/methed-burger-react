import './App.scss';
import Catalog from './Components/Catalog/Catalog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

export default function App() {
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
