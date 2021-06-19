import { Carousel, Image } from 'antd';
import { Imagen } from './Imagen';
export const Carrusel = ({ images }) => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Carousel autoplay>
        {images
          ? images.map((img) => {
              return (
                <div>
                  {/* <Image style={contentStyle} src={img} /> */}
                  <Imagen style={contentStyle} image={img} />
                </div>
              );
            })
          : null}
      </Carousel>
    </>
  );
};
