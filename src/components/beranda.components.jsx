import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import env from "react-dotenv";

const BerandaComponents = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${env.BASE_URL}/discover/movie`, {
        params: {},
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${env.KEY_API}`,
        },
      })
      .then((result) => {
        setMovies(result.data.results);
      });
  }, []);
  return (
    <div className="flex justify-center mt-10 gap-5">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          {movies.map((product) => (
            <Card key={product.id} className="w-86">
              <CardHeader shadow={false} floated={false} className="h-72">
                <img src={`${env.IMG_URL}/${product.backdrop_path}`} alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {product.vote_average}
                  </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">
                  {product.overview}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button ripple={false} fullWidth={true} className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerandaComponents;
