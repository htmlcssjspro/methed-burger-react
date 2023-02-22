import { Provider } from 'react-redux';
import './App.scss';
import Catalog from './Components/Catalog/Catalog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import store from './store';

export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <Navigation />
                <Catalog />
            </main>
            <Footer />
        </Provider>
    );
}
