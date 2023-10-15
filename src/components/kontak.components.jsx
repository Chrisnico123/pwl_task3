import React, { useState, useEffect } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import TableComponent from "./tabel.components";

const KontakComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("submittedData") || "[]");
    setSubmittedData(storedData);
  }, []);

  const saveToLocalStorage = (data) => {
    const storedData = JSON.parse(localStorage.getItem("submittedData") || "[]");
    storedData.push(data);
    localStorage.setItem("submittedData", JSON.stringify(storedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    saveToLocalStorage(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-40">
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
      </div>
      <div className="flex justify-center items-center mt-40">
        <TableComponent />
      </div>
    </>
  );
};

export default KontakComponents;
