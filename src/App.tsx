import { useState, useEffect } from 'react';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';
import { NewsItem, ApiResponse } from '../src/utils/types';


function App() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        console.log(data);
        setNews(data.items)
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Router>
    <Routes>
      <>
        <Route path="/" element={<NewsList news={news} />} />
        <Route path="/news/:id" element={<NewsDetails news={news} />} />
      </>
    </Routes>
    </Router>
  );
}

export default App;
