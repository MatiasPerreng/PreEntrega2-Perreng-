import React, { useEffect, useState } from 'react';
import ListItem from '../../componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import Rick from '../../images/Rick.jpeg';
import Morty from '../../images/Morty.jpeg';
import Summer from '../../images/Summer.jpeg';
import Beth from '../../images/Beth.jpeg';
import Jerry from '../../images/Jerry.jpeg';
import Birdperson from '../../images/Birdperson.jpeg';
import Squanchy from '../../images/Squanchy.jpeg';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const charactersData = [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              price: '410',
              image: Rick,
            },
            {
              id: 2,
              name: 'Morty Smith',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              price: '450',
              image: Morty,
            },
            {
              id: 3,
              name: 'Summer Smith',
              status: 'Alive',
              species: 'Human',
              gender: 'Female',
              price: '220',
              image: Summer,
            },
            {
              id: 4,
              name: 'Beth Smith',
              status: 'Alive',
              species: 'Human',
              gender: 'Female',
              price: '720',
              image: Beth,
            },
            {
              id: 5,
              name: 'Jerry Smith',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              price: '220',
              image: Jerry,
            },
            {
              id: 6,
              name: 'Birdperson',
              status: 'Alive',
              species: 'Alien',
              gender: 'Male',
              price: '620',
              image: Birdperson,
            },
            {
              id: 7,
              name: 'Squanchy',
              status: 'Alive',
              species: 'Alien',
              gender: 'Male',
              price: '120',
              image: Squanchy,
            },
          ];
          resolve(charactersData);
        },);
      });
    };

    fetchData()
      .then((data) => {
        if (category) {
          const filteredCharacters = data.filter(
            (personaje) => personaje.species === category
          );
          setCharacters(filteredCharacters);
        } else {
          setCharacters(data);
        }
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
  }, [category]);

  return (
    <>
      <ListItem
        greetings={'Bienvenidos a mi segunda entrega Coders'}
        data={characters}
        selectedCategory={category}
      />
    </>
  );
};

export default Home;
