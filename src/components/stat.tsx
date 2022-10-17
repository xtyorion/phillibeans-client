import Container from "./container";


export default function Stat(props : {}) {
  return (
    <Container >
      <div className="dark:bg-light-background border-2 text-dark-headline border-dark-background py-3 px-3 rounded-md w-64 my-4 shadow-xl">
      <div>
          <p className="text-2xl font-semibold my-2">Easy</p>
          <div className="border-t-2"></div>

          <div className="flex justify-between">
              <div className="my-2">
                  <p className="font-semibold text-3xl mb-2">1234</p>
              </div>
              <div className="my-1">
                  <p className="font-semibold text-base">Progress</p>
                  <div className="text-base text-gray-400 font-semibold">
                      <p className="bg-secondary">34%</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </Container>
  );
}
