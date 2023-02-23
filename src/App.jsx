import { Provider } from 'react-redux';
import store from './store';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Order from './Components/Order/Order';
import Catalog from './Components/Catalog/Catalog';
import Footer from './Components/Footer/Footer';
import './App.scss';

export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <Content className="page-content">
                <Order />
                <Catalog />
            </Content>
            <Footer />
        </Provider>
    );
}
