import { NavLink, useParams } from 'react-router-dom';
import { NewsItem } from '../utils/types';
import { TimeSince} from '../utils/TimeSince';
import '../utils/newsDetails.css';

interface NewsDetailProps {
  news: NewsItem[];
}

function NewsDetail({ news }: NewsDetailProps) {
  const { id } = useParams<{ id: string }>();
  if (typeof id !== 'string') {
    return <div>Error: ID not found</div>;
  }
  const newsItem = news.find(item => item.id === parseInt(id, 10));

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
  
    <div className="card-container">
      <div className="card">
        <h1>{newsItem.titulo}</h1>
        <p>{newsItem.introducao}</p>
        <a href={newsItem.link} target="_blank" rel="noopener noreferrer" className="news-oficial-link">Leia a notícia no IBGE</a>
        <p>Publicado há {TimeSince(newsItem.data_publicacao)}</p>
        <NavLink to="/" className="back-button">Voltar</NavLink>

      </div>
 
    </div>


  );
}

export default NewsDetail;