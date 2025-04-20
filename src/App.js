//src/App.js

import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';
import { getPokemonWithDetails, setLoading } from './actions/index';
import logo from './statics/logo.svg';
import './App.css';

function App() {
/*   
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading')); */

  const pokemons = useSelector((state) => state.getIn(['data','pokemons'], shallowEqual)).toJS();
  const loading = useSelector((state) => state.getIn(['ui','loading'])); 

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      try {
        const pokemonsRes = await getPokemons();
        dispatch(getPokemonWithDetails(pokemonsRes));
        
      } catch (error) {
        // Handle the error appropriately here
        console.error('Error fetching Pokemon:', error);
        // Optionally set an error state
        //setError(error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    fetchPokemons();

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
