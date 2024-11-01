import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import { Container, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState(null); //APIden gelen pokemon verilerini saklamak için state tanımladık
  const [error, setError] = useState(null); // Hata durumu için state

  const fetchPokemonData = async (pokemonName) => {
    //fetchPokemonData kullancıdan aldığı pokemonName ile pokemon verilerini almak için APIye istek gönderir
    setError(null); // Her aramada hata mesajını sıfırlayın
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      ); //axios.get ile get isteği gönderilir
      setPokemonData(response.data); //responsea aldığımız verilerin data kısmı PokemonData statine kaydedilr, daha sonra kullanıcaz
    } catch (error) {
      setError("Pokémon bulunamadı. Lütfen başka bir isim girin.");
      setPokemonData(null);
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" align="center" color="#ff5508" gutterBottom>
        PokéFinder
      </Typography>
      <SearchBar onSearch={fetchPokemonData} />
      {error && ( // Hata durumu kontrolü   <SearchBar onSearch={fetchPokemonData} /> burası SearchBar bileşenine  fetchPokemonData fonksiyonunu props olarak iletir
        <Typography variant="body1" color="error" style={{ marginTop: "16px" }}>
          {error}
        </Typography>
      )}
      <PokemonCard pokemon={pokemonData} />
    </Container> //pokemonData statindeki verileri pokemonCarda ekler, böylece pokemonun detayları görünür
  );
}

export default App;
