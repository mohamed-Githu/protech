import Image from "next/image";

const SocialIcon = ({ src }) => (
  <div>
    <Image
      src={src}
      height={37}
      width={40}
      className="object-cover cursor-pointer text-primary-dark"
    />
  </div>
);

export default SocialIcon;
