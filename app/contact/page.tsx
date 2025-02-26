import { FC } from "react";
import Link from "next/link";

// Components
import PageHeader from "@/components/PageHeader";
import Quote from "@/components/Quote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Data
import { ContactPageData } from "@/lib/data";

const ContactPage: FC = () => {
  const loading: boolean = false;

  return (
    <main className="space-y-10">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        description="We would love to hear from you."
      />

      {/* Contact Content */}
      <div className="container mb-20 flex flex-col gap-10 lg:flex-row items-start">
        {/* Contact Information */}
        <div className="lg:w-1/2 shadow-mainShadow rounded-2xl p-5 sm:p-10 sm:flex sm:flex-col sm:items-center sm:text-center lg:text-start lg:items-start dark:shadow-none dark:bg-secondary/70">
          <p className="text-primary mb-2">Get in touch</p>
          <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90 sm:w-[400px]">
            Your Next Big Idea Starts with a Conversation!
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Have an idea in mind or need expert guidance? We&#39;re here to
            listen, collaborate, and bring your vision to life. Whether it&#39;s
            a project inquiry, partnership opportunity, or just a question,
            let&#39;s start the conversation and create something amazing
            together. Reach out to us today!
          </p>

          {/* Contact Details */}
          <div className="mt-5 flex flex-col gap-5 sm:w-[400px] lg:w-full text-start">
            {ContactPageData.map((contact, index) => (
              <div
                key={index}
                className="flex gap-5 bg-primary dark:bg-background/50 text-white items-center px-5 rounded-md py-3"
              >
                <div className="text-2xl">{contact.icon}</div>
                <div className="flex flex-col">
                  <h1>{contact.title}</h1>
                  <Link
                    className="break-all text-white/70"
                    href={
                      contact.title === "Call Us"
                        ? "tel:+923467890654"
                        : contact.title === "Email Us"
                        ? "mailto:devsphereoffice@gmail.com"
                        : contact.title === "WhatsApp Us"
                        ? "https://wa.me/923467890654"
                        : ""
                    }
                    target="_blank"
                  >
                    {contact.description}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 shadow-mainShadow dark:shadow-none dark:bg-secondary/70 rounded-2xl p-5 sm:p-10">
          <h1 className="text-3xl font-black font-nunito mb-2 text-black/90 dark:text-white/90">
            Let&#39;s talk!
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Have questions, suggestions, or a project idea? We&#39;re here to
            listen! Reach out to us for expert guidance, collaboration, or
            support. Your feedback matters, and we&#39;re just a message away.
            Let&#39;s create something amazing together—get in touch today!
          </p>

          {/* Form */}
          <form className="mt-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Phone" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
            </div>
            <div className="grid gap-2 my-3">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Message"
                className="resize-none"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Quote Section */}
      <Quote />
    </main>
  );
};

export default ContactPage;
