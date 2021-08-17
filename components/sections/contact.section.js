import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

import Button from "../ui/button.ui";
import Input from "../ui/input.ui";
import SocialIcon from "../ui/social-icon.ui";
import Typography from "../ui/typography.ui";

const ContactSection = () => (
  <div
    className="max-w-1180 mx-auto pt-24 mt-40 -mb-56 z-10 relative px-4 sm:px-2"
    id="contact"
  >
    <Typography variant="h1" className="text-primary-dark text-center">
      Contact
    </Typography>
    <div className="bg-white rounded-20 shadow-3 flex overflow-hidden mt-24 h-500 md:flex-col md:h-auto">
      <div className="bg-primary flex flex-col justify-between items-start p-8 flex-grow md:space-y-16">
        <Typography
          variant="h2"
          className="text-primary-dark self-center opacity-90"
        >
          Contact Information
        </Typography>
        <div className="grid grid-cols-contact grid-rows-contact gap-y-12 gap-x-5 items-center md:gap-y-5">
          <PhoneIcon className="text-primary-dark h-9" />
          <Typography variant="p" className="text-primary-dark">
            +1 898 898 302
          </Typography>
          <MailIcon className="text-primary-dark h-9" />
          <Typography variant="p" className="text-primary-dark">
            support@protech.com
          </Typography>
        </div>
        <div className="space-x-8 flex">
          <SocialIcon src="/images/social/Vector-1.svg" />
          <SocialIcon src="/images/social/Vector-2.svg" />
          <SocialIcon src="/images/social/Vector.svg" />
        </div>
      </div>
      <div className="p-14 lg:p-10 sm:p-5 max-w-3xl w-full relative h-full flex flex-col">
        <div className="grid grid-cols-2 grid-rows-contact-2 gap-8 lg:gap-4 sm:grid-cols-1 sm:grid-rows-contact-3 w-full mb-10">
          <Input placeholder="Name *" type="text" />
          <Input placeholder="Email *" type="email" />
          <Input
            placeholder="Message *"
            type="text"
            textarea
            className="col-span-2 resize-none sm:col-span-full"
            rows={7}
          />
        </div>
        <div className="flex justify-end mt-auto">
          <Button variant="p" className="ml-auto">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
