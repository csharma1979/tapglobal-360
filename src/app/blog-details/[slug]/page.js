
import BlogDetails from "../../../components/pages/Blog/BlogDetail.jsx";

const page = ({ params }) => {
  const { slug } =  params;
  
  return (
    <div>
      <BlogDetails slug={slug} />
    </div>
  );
};

export default page;
