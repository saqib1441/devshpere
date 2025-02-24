"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Quote: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    // Call your API or handle the quote request submission here.

    // After submission, you can reset form or show a success message.
    setTimeout(() => {
      alert("Your quote request has been submitted successfully!");
      setIsSubmitting(false);
    }, 2000); // Simulate form submission process
  };

  return (
    <section className="mb-10">
      <div className="container pb-20">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="font-nunito font-black text-3xl text-black/90 dark:text-white/90">
            Get a Free Trial
          </h1>
          <p className="text-black/70 dark:text-white/70 sm:w-[500px] md:w-[600px]">
            Try our services risk-free! Sign up for a free trial and experience
            the quality and innovation we bring to digital solutions. No
            commitment—just results!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-10 sm:items-center md:w-[650px] lg:w-[750px] md:mx-auto sm:py-16 sm:px-10 p-5 rounded-2xl shadow-mainShadow"
        >
          <div className="grid gap-5 sm:grid-cols-2 sm:w-full">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                type="text"
                id="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="number"
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Quote;
