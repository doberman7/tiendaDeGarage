import { Link, Redirect } from 'react-router-dom';
import '../Router.css';
import { Button, Carousel, Divider } from 'antd';
import { useContextInfo } from '../hooks/context';
import UserForTest from './UserForTest/index';
let Background1 = 'tasas.jpeg';
let Background2 = 'cosas.jpeg';
let Background3 = 'cosas1.jpeg';
let Background4 = 'tools.jpg';

const contentStyle = {
  uno: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background1})`,
    backgroundSize: 'cover',
  },
  dos: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background2})`,
    backgroundSize: 'cover',
  },
  tres: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background3})`,
    backgroundSize: 'cover',
  },
  cuatro: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: `url(${Background4})`,
    backgroundSize: 'cover',
  },
};

const Home = () => {
  const { user } = useContextInfo();

  return user ? (
    <>
      <Redirect to="/profile" />
    </>
  ) : (
    <div className="buttonsHome">
      <h1>Tienda de Garage</h1>

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle.uno}>B U Y</h3>
        </div>
        <div>
          <h3 style={contentStyle.dos}>S E L L</h3>
        </div>
        <div>
          <h3 style={contentStyle.tres}>B U Y</h3>
        </div>
        <div>
          <h3 style={contentStyle.cuatro}>S E L L</h3>
        </div>
      </Carousel>
      <Divider />
      <p>
        The most enjoyable experience in purchases and exchanges of chairs,
        tables, dishes, electronic devices, jugs, glasses, plate, spoons, forks,
        rulers, pencils, backpacks and other junk you can find in your garage
        only here with your Tienda de Garage
      </p>
      <Button type="primary" ghost>
        <Link to="/Signup">Sign up</Link>
      </Button>
      <Divider />
      <Button type="primary" ghost>
        <Link to="/Login">Login</Link>
      </Button>
      <Divider />
      <UserForTest />
    </div>
  );
};

export default Home;
