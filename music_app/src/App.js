
import "./assets/css/tailwind.css";
import Album from "./pages/Album";
import Chart from "./pages/Chart";
import HomePage from "./pages/HomePage";
import PlayList from "./pages/PlayList";


import Songs from "./pages/Songs";
import Trending from "./pages/Trending";
import DataProvider from "./provider/provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./pages/SondDetails";
import Search from "./pages/Search";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="playlist" element={<PlayList />} />
          <Route path="albums" element={<Album />} />
          <Route path="trending" element={<Trending />} />
          <Route path="song/:songId" element={<Songs />} />
          <Route path="chart" element={<Chart />} />
          <Route path="details/:songsId" element={<Data/>} />
          <Route path = "searchsong/:searchId" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
