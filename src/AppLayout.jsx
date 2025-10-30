import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet /> {/* ここにAboutPageやWorksPageなどが入る */}
      </main>
    </div>
  );
};
export default AppLayout;