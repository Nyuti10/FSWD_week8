import "./App.css";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="app">
      <ProfileCard
        name="Nyuti Bhesania"
        photo="https://randomuser.me/api/portraits/women/44.jpg"
        bio="A passionate web developer who loves React!"
      />
    </div>
  );
};

export default App;
