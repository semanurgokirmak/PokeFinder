import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

function PokemonCard({ pokemon }) {
  if (!pokemon) return null; //eğer pokemon propu mevcut değilse hiç bi şey render etmez

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card
        style={{
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
          backgroundColor: "#9dabbe",
          borderRadius: "26px", // Oval köşeler için
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Yumuşak bir gölge eklemek için
          padding: "16px", // İçeriğe biraz boşluk eklemek için
          transition: "transform 0.2s", // Hover efektine geçiş eklemek için
        }}
      >
        <Avatar
          alt={pokemon.name} //görüntü yoksa alternatif olarak adını göster
          src={pokemon.sprites.front_default}
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            marginTop: "16px",
          }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {pokemon.name.toUpperCase()}
          </Typography>
          <Typography variant="body1">Boy: {pokemon.height * 10} cm</Typography>
          <Typography variant="body1">
            Kilo: {pokemon.weight / 10} kg
          </Typography>

          <Typography variant="body1">
            Türler:{" "}
            {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
          </Typography>

          <Typography
            variant="body1"
            style={{ marginTop: "16px", fontWeight: "bold" }}
          >
            Beceriler
          </Typography>
          {pokemon.abilities.map((abilityInfo, index) => (
            <Typography key={index} variant="body2">
              {abilityInfo.ability.name}
            </Typography>
          ))}

          <Typography
            variant="body1"
            style={{ marginTop: "16px", fontWeight: "bold" }}
          >
            Özellikler
          </Typography>
          {pokemon.stats.map((statInfo, index) => (
            <Typography key={index} variant="body2">
              {statInfo.stat.name}: {statInfo.base_stat}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default PokemonCard;
