import React, { useEffect,useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedList from './components/FeaturedList';
import Header from './components/Header'


export default()=>{

  const [movieList,setMovieList] = useState([]);
  const [featuredList,setFeaturedList] = useState(null);
  const [blackHeader,setBlackHeader] = useState();

  useEffect(()=>{
    const loadAll = async()=>{
      let list =  await Tmdb.getHomeList();
      setMovieList(list);
     
     
    
      let originals = list.filter(i=>i.slug === 'Originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      console.log(chosen);
      setFeaturedList(chosenInfo);
    }
    
    loadAll();
  },[]);
  useEffect(()=>{
    const scrollListener =()=>{
      if(window.scrollY> 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
     
      
    }
    window.addEventListener('scroll',scrollListener);
      
    return()=>{
      window.removeEventListener('scroll',scrollListener);
    }

  },[]);
  console.log(blackHeader)
  return(
    <div className='page'>
      <Header black={blackHeader}/>
      {featuredList &&

        <FeaturedList item={featuredList} />
     
      }
       

      <section className='lists'>
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow> 
        ))}
      </section>
      
    </div>
  );
}
