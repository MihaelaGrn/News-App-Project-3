import Page404 from "./pages/Page404";
import { Routes, Route } from "react-router-dom";
import { FavoritesContext } from "./store/favorites/context";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import { useReducer } from "react";
import { initialState, favoritesReducer } from "./store/favorites/reducer";

function App() {
  //initializare state
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <div className="App">
      <FavoritesContext.Provider value={favoritesContextValue}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
