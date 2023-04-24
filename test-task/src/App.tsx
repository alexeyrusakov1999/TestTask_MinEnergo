import { FC } from 'react';
import { TotalPage } from './components/total-page/total-page';
import { FundPage } from './components/fund-page/fund-page';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout';

const App: FC = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<TotalPage />} />
          <Route path="FundPage" element={<FundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
