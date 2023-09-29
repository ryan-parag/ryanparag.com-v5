import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {

  return (
    <div className="max-w-4xl mx-auto my-6">
      <Carousel showArrows={true} emulateTouch>
        {
          images.map((item, i) => (
            <div key={i} className="bg-themeSurfaceVariant text-themeOnSurfaceVariant relative flex flex-col rounded-2xl p-6">
              <img className="z-0 relative rounded-xl" src={item}/>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}

export default ImageCarousel