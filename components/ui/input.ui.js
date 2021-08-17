const styles =
  "py-4 px-5 lg:px-3 lg:py-2 font-roboto font-normal text-md text-grey tracking-wide border border-primary border-opacity-50 bg-primary bg-opacity-10 rounded-5 outline-none focus:shadow-input placeholder-opacity-50 placeholder-grey";

const Input = ({ textarea, className, ...props }) =>
  !textarea ? (
    <input {...props} className={`${styles} ${className}`} />
  ) : (
    <textarea {...props} className={`${styles} ${className}`} />
  );

export default Input;
