import { Link as ReactRouterLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Links App</h1>
      <nav
        style={{
          borderBottom:'1px solid',
          paddingBottom: '5px'
        }}
        >
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
