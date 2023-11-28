import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Grid from "@mui/material/Grid";
import Footer from './components/Footer/Footer'
import SingleCard from './components/SingleCard/SingleCard'

const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/12/home-alone-2.jpg",
    time: "1hr: 50mins",
  },
  {
    id: 2,
    name: "Black Adam",
    image: "https://jesuitnews.com/wp-content/uploads/2022/12/BH2tZ9HHgDvePuvBYLQXzvH3tTB8q2Ov3rRylj5a.webp",
    time: "2hr: 10mins",
  },
  {
    id: 3,
    name: "Back to the Future",
    image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2022/04/IMG_5943-scaled.jpeg",
    time: "2hr: 50mins",
  },
  {
    id: 4,
    name: "Avengers",
    image: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/10/IMG_1862.jpeg",
    time: "2hr:30mins",
  },
];

function App() {


  return (
    <div className="App">
      <Navigation/>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
      {mockData.map(({ name, image, time, id }, index) => (
      <Grid item xs={3} key={index}>
      <SingleCard
        id={id}
        name={name}
        time={time}
        image={image}
        
      />
      </Grid>
      ))}
      </Grid>
      <Footer />
    </div>
  );
  
}

export default App;
