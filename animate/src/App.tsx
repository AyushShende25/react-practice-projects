import AnimatedCard from './components/AnimatedCard';
import AnimatedGallery from './components/AnimatedGallery';
import AnimatedGalleryStaggered from './components/AnimatedGalleryStaggered';
import BouncingLoader from './components/BouncingLoader';
import DraggableBox from './components/DraggableBox';
import FlippingCard from './components/FlippingCard';
import PulsingBtn from './components/PulsingBtn';
import RangeSlider from './components/RangeSlider';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <PulsingBtn /> */}
      {/* <BouncingLoader /> */}
      {/* <FlippingCard /> */}
      {/* <AnimatedCard /> */}
      {/* <AnimatedGallery /> */}
      {/* <AnimatedGalleryStaggered /> */}
      {/* <RangeSlider /> */}
      <DraggableBox />
    </div>
  );
}
export default App;
