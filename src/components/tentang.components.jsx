import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export function TentangComponents() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Chrisnico Alexander Hutapea
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Backend Developer / Cloud Computing Enthusiast
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TentangComponents;
