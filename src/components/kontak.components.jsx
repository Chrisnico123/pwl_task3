import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const KontakComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang diisi pengguna (formData)
    console.log(formData);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Send Message
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" name="name" value={formData.name} onChange={handleChange} />
          <Input size="lg" label="Email" name="email" value={formData.email} onChange={handleChange} />
          <Input type="text" size="lg" label="Message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default KontakComponents;
