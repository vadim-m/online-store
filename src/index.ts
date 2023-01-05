import './index.html';
import './index.scss';
import App from './components/app/app';
import LocalStorage from './data/localStorage';

const app = new App();

app.run();
app.addEvents();
