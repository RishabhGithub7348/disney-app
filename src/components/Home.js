import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
// import Movies from './Movies'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'

import {useDispatch, useSelector} from 'react-redux'

import  db  from '../firebase'; 
import {doc, onSnapshot ,collection} from "firebase/firestore";
import {setMovies} from "../features/movie/movieSlice"
import {selectUserName} from '../features/user/userSlice'  
function Home() {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
 
     useEffect(()=>{
       
       onSnapshot(collection(db,`movies`),(snapshot)=>{
         snapshot.docs.map((doc)=>{
            //  console.log(recommends);
            switch (doc.data().type) {
                case "recommend":
                  recommends = [...recommends, { id: doc.id, ...doc.data() }];
                  break;
      
                case "new":
                  newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                  break;
      
                case "original":
                  originals = [...originals, { id: doc.id, ...doc.data() }];
                  break;
      
                case "trending":
                  trending = [...trending, { id: doc.id, ...doc.data() }];
                  break;
              }
            });
      
            dispatch(
              setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
              })
            );
          });
        }, [userName]);
      
    return (
        <Container>
         <ImgSlider/>
         <Viewers/>
         <Recommends/>
         <NewDisney/>
         <Originals/>
         <Trending/>
        </Container>
    )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  
  &:before{
      background: url("/images/home-background.png") center center / cover 
      no-repeat fixed ;
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
  }
`

// useEffect (() =>{
//   onSnapshot(collection(db,`messages`),(snapshot) => {
//     setMessages(snapshot.docs.map((doc) =>{
//       console.log("doc.data");
//     }));
//   })
// })