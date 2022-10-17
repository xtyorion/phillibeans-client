import Container from "./container";
import Stat from "./stat";


export default function Statistics(props : {}) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 item-center justify-center">
        <Stat />
        <Stat />
        <Stat />
      </div>
    </Container>
  );
}
