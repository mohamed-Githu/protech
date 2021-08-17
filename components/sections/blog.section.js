import Typography from "../ui/typography.ui";
import BlogBlock from "../layout/blog-block.layout";
import SecondaryLink from "../ui/secondary-link.ui";

const posts = [
  {
    date: "27 May, 2020",
    content:
      "lorem ipsum lorem ipsum asd;f asdf; asdf;klj asdf;kljas asdf;klj asdfl;kj",
    image: "/images/blog/blog1.jpg",
  },
  {
    date: "05 Oct, 2020",
    content:
      "lorem ipsum lorem ipsum asd;f asdf; asdf;klj asdf;kljas asdf;klj asdfl;kj",
    image: "/images/blog/blog2.jpg",
  },
  {
    date: "15 Feb, 2021",
    content:
      "lorem ipsum lorem ipsum asd;f asdf; asdf;klj asdf;kljas asdf;klj asdfl;kj",
    image: "/images/blog/blog3.jpg",
  },
];

const BlogSection = () => (
  <div className="pt-24 pb-36 bg-primary bg-opacity-10 px-4 xs:px-2" id="blog">
    <div className="max-w-1180 mx-auto">
      <div className="flex items-center justify-between mb-36 md:mb-16 xs:flex-col xs:space-y-3">
        <Typography
          variant="h1"
          underline
          className="text-primary-dark md:text-3xl"
        >
          Check Our Blog
        </Typography>
        <SecondaryLink>Go to blog</SecondaryLink>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 grid-flow-row">
        {posts.map((post, i) => (
          <BlogBlock key={`post-${i}`} {...post} />
        ))}
      </div>
    </div>
  </div>
);

export default BlogSection;
