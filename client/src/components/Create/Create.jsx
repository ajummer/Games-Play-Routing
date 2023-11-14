import * as gameService from "../../services/gameService.js";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  const createGameSubmitHandler = async (e) => {
    e.preventDefault();

    // uncontrolled form ! not good practice
    const gameData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await gameService.create(gameData);
      console.log(gameData)
      navigate("/games");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createGameSubmitHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" defaultValue={""} />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Create Game"
          />
        </div>
      </form>
    </section>
  );
}
