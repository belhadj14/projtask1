
import RawSlider from "react-slick";
const Slider = RawSlider.default || RawSlider;
import { products } from "../assets/Products";
import { Button } from "react-bootstrap";


const Hero = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  
  return (
    <div className="container py-5 mt-5">
  <Slider {...settings} >
    {products.map((prod) => (
      <div key={prod.id} className="h-75">
        <div className="row align-items-center justify-content-center g-5">

         
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
            <h3 className="mb-3 w-50">{prod.desc}</h3>
            <p className="text-warning-emphasis mb-4 w-75">
              {prod.details}
            </p>

            <Button
              variant="primary"
              className="px-4 py-2 rounded-pill mx-auto mx-md-0"
              style={{ width: "200px" }}
            >
              Visit Our Collections
            </Button>
          </div>

          
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={prod.img}
              alt={prod.desc}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </div>

        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Hero;