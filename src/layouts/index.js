import { ErrorBoundary, MenuBar } from '@/components';
import { StoreProvider } from 'think-react-store';
import { useLocation } from 'umi'
import * as store from '../store'
// import * as store from '../stores';

function BasicLayout(props) {
  const location = useLocation()
  const paths = ['/', '/order', '/user']
  return (
    <StoreProvider store={store}>
      {/* <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      /> */}
      <MenuBar 
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      <ErrorBoundary>
      {props.children}
      </ErrorBoundary>
    </StoreProvider>
  );
}

export default BasicLayout;
