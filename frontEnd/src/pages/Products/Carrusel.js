import { Carousel, Image } from 'antd';

export const Carrusel = ({ images }) => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  //   console.log(images);
  //   images.map((image) => console.log(image));
  return (
    <>
      <Carousel autoplay>
        {images.map((img) => {
          return (
            <div>
              <h3 style={contentStyle}>
                <Image src={img} />
              </h3>
            </div>
          );
        })}
        {/* <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
      </Carousel>
    </>
  );
};
