import Image from "next/image";
import Link from "next/link";

const PostCardComponent = ({ post }) => {
  console.log(post);
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        {/* image
        <Link href={`/posts/${post?.id}`}>
          <Image
            className="rounded-t-lg"
            src={post?.image}
            alt={post?.title}
            width={400}
            height={200}
            layout="responsive"
          />
        </Link> */}
        <div className="p-5">
          {/* title */}
          <Link href={`/posts/${post?.id}`}>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {post?.title}
            </h5>
          </Link>
          {/* descriptiomn */}
          <p className="font-normal text-gray-700 mb-3">{post?.body}</p>
          {/* read more button */}
          <Link
            href={`/posts/${post?.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCardComponent;
