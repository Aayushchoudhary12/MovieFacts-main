import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import useFetch from '../../../hooks/useFetch';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';



import './banner.scss';

export default function Banner() {
    const navigate =  useNavigate();
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const { url } = useSelector((state) => state.home);

    const {data, loading} = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandle = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

  return (
      <div className="banner">

        <div className="backdrop-img">
            {!loading && <Img src={background}/> }
        </div>

        <div className="opacity">
        </div>   

        <ContentWrapper>
            <div className="bannerContent">
                <span className="title">
                Welcome
                </span>
                <span className="subTitle">
                    Millions of movies, TV shows and peops to discover.
                Explore now.
                </span>
                <div className="searchInput">
                    <input 
                    type="text"
                    placeholder="Search for a movie or tv show..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandle}
                    value={query}
                    />
                    <button>Search</button>
                </div>
            </div>
        </ContentWrapper>    
      </div>
  )
}
