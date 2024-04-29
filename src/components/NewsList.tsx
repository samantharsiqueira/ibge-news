import { NavLink } from 'react-router-dom';
import { NewsItem } from '../utils/types';
import  trybeLogo from '../images/trybe-logo.jpg'
import favoriteIcon from '../images/icon-favorite-filled.png'
import unfavoriteIcon from '../images/icon-favorite.png'
import { useState } from 'react';
import { TimeSince} from '../utils/TimeSince';
import '../utils/newsList.css';

interface NewsListProps {
  news: NewsItem[];
}

function NewsList({ news }: NewsListProps) {
  const [isFavorite, setIsFavorite] = useState<boolean[]>(Array(news.length).fill(false));

  function handleFavoriteNews(index: number) {
    const updatedFavorite = [...isFavorite];
    updatedFavorite[index] = !updatedFavorite[index]; 
    setIsFavorite(updatedFavorite);
    alert('Os favoritos estão no final da página.');
  }

  const favoriteNews = news.filter((_, index) => isFavorite[index]);

  return (
    <>
 <div className='header'>
    <img className='logo-container' src={trybeLogo} alt='Trybe logo' />
    <h1 className='title-container'>News</h1>
</div>
<div>
    <ul className='news-list'>
      {news.map((item, index) => (
        <li key={item.id}>
          <h5>{item.titulo}</h5>
          <p>{item.introducao}</p>
          <p>Publicado há {TimeSince(item.data_publicacao)}</p>
          <div className="right-side"> 
          <NavLink to={`/news/${item.id}`} className="news-link">Leia a notícia aqui</NavLink>
          <hr className='divider'/>
          <button 
    type='button'
    data-testid='favorite-button'
    className='favorite-button'
    onClick={() => handleFavoriteNews(index)}>
      <img
      src={ isFavorite[index] ? favoriteIcon : unfavoriteIcon }
      alt={ isFavorite[index] ? 'Favorite' : 'Unfavorite' }
      />
    </button>
    </div>
        </li>
      ))}
    </ul>
    </div>
 
{favoriteNews.length > 0 && (
    <div className='favorite-news-card'>
      <h2>Favorite News</h2>
      <ul className='favorite-news-list'>
        
        {favoriteNews.map((item) => (
          <li key={item.id}>
            <h5>{item.titulo}</h5>
            <p>{item.introducao}</p>
            <p>Publicado há {TimeSince(item.data_publicacao)}</p>
            <NavLink to={`/news/${item.id}`} className="favorite-news-link">Leia a notícia aqui</NavLink>  
          </li>
        ))}
      </ul>
    </div>

)}
    </>
  );
}

export default NewsList;