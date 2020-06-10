import React, {useState} from 'react';
import styled from 'styled-components';
import '../background.css'

const TitleWrapper = styled.div`
color: #625a56;
margin: 1;
text-align: center;
font-family: georgia, sans-serif;
text-transform: uppercase;
`;

const SubtitleWrapper = styled.div`
text-align: center;
`;

const TextWrapper = styled.div`
color: #000000;
margin: 1;
font-size: 17px;
font-weight: bold;
text-align: left;
font-family: sans-serif;
position: absolute;
top: 160px;
line-height: 120%;
width: 460px;
margin-left: 420px;
`;

const Home = () => {

      return (
        <div className='container-fluid'>
        <TitleWrapper>
          <h2>Waltham Community Forum</h2>
        </TitleWrapper>
        <SubtitleWrapper>
        <h3>Welcome!</h3>
        </SubtitleWrapper>
        <TextWrapper>
        <div>
        <p> Welcome to the Waltham Community Forum. With the COVID-19 prevailing, there are a lot of arising
            concerns over the accessibility of food, daily supplies, and housing. Also, it will be important
            to get information about the number of peopled infected nearby.</p>
        <p> We build this forum so that people in Waltham can get informed about the operating status of restaurant, shops,
            houses for rent, and updates on COVID-19.</p>
        <p> Since this is a forum, there are places where people can post info they know and share with each other.</p>
        <p> Stay Safe!
        </p>
        </div>
        </TextWrapper>
        </div>
      )
}

export default Home;
