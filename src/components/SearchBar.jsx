import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={4}
      sx={{ width: "100%", maxWidth: 500, margin: "auto" }}
    >
      <TextField
        label="Pokemon Ara"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // e= olay nesnesidir, kullanıcının yaptığu etkileşim hakkında bilgi verir
        //e.target.value= kullancının textfield içine yazdığı değeri alır
        //setQuery= useState kancasının sağladığı fonksiyondur, query nin durumunu günceller
        fullWidth
        style={{ marginRight: "8px" }}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#ff5508", color: "#9dabbe" }}
        onClick={handleSearch}
      >
        Ara
      </Button>
    </Box>
  );
}

export default SearchBar;
