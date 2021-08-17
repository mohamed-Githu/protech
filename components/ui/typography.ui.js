const variants = {
  h1: "font-black text-5xl tracking-wider leading-56",
  h2: "text-2xl font-bold tracking-wide leading-31",
  p: "font-normal text-lg tracking-wide sm:leading-22",
  p2: "font-normal text-22 tracking-wide leading-29",
  p3: "font-normal text-lg tracking-wide leading-22",
  link1: "font-normal text-sm tracking-wide cursor-pointer",
  link2: "font-bold text-base cursor-pointer leading-22",
  caption: "font-regular text-sm",
  button: "text-lg font-bold tracking-wide cursor-pointer",
};

const Typography = ({ variant, className, children, underline, ...props }) =>
  !underline ? (
    <p className={`font-roboto ${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  ) : (
    <div {...props}>
      <p className={`font-roboto ${variants[variant]} ${className}`}>
        {children}
      </p>
      <div className="rounded-full h-1 w-full bg-primary mt-1" />
    </div>
  );

export default Typography;
