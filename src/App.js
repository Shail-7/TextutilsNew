import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import Sdata from './Sdata';
import Heading from './Heading';
import './index.css';

function App() {

  return(
  <>
    <Heading />
    <div className="container">
      <div className="row">

        {Sdata.map((curval) => {
          return (
            <Card
              key={curval.key}
              seriestitle={curval.seriestitle}
              imgsrc={curval.imgsrc}
              watchlink={curval.watchlink}
            />
          );
        })}

      </div>
    </div>
  </>
  );

}

export default App;
