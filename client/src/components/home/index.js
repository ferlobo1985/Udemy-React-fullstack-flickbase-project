import React from 'react';
import { Grid } from '@material-ui/core';
import ArticleCard from '../../utils/articleCard';

const Home = () => {
  
  return(
    <div>
        <div>
          CARROUSEL
        </div>
        <Grid container spacing={2} className="article_card">
          <Grid key={1} item xs={12} sm={6} lg={3}>
            <ArticleCard key={1}/>
          </Grid>
          <Grid key={1} item xs={12} sm={6} lg={3}>
            <ArticleCard key={1}/>
          </Grid>
          <Grid key={1} item xs={12} sm={6} lg={3}>
            <ArticleCard key={1}/>
          </Grid>
          <Grid key={1} item xs={12} sm={6} lg={3}>
            <ArticleCard key={1}/>
          </Grid>
          <Grid key={1} item xs={12} sm={6} lg={3}>
            <ArticleCard key={1}/>
          </Grid>
        </Grid>


    </div>
  )
}

export default Home;