//src/App.js

import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector((state) => 
    //state.getIn(['data','pokemons'], shallowEqual)).toJS();
    state.data.pokemons, shallowEqual)

  //Slice yet to be created  
  const loading = useSelector((state) => state.ui.loading)
    //state.getIn(['ui','loading'])); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [dispatch]);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      { loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>)
        : (
        <PokemonList pokemons={pokemons}/>
      )}
  
    </div>

  );
}


export default App;
