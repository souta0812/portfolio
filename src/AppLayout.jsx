import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* ここにAboutPageやWorksPageなどが入る */}
      </main>
    </div>
  );
};
export default AppLayout;