import Image from 'next/image';
import Link from 'next/link';

import { ImageButtonProps } from './Sets';

type BlogPostsTypes = Omit<ImageButtonProps, 'text'>;

const Post = ({ href, src, alt }: BlogPostsTypes) => {
  return (
    <div className="h-567">
      <Link href={href}>
        {/* <Title/> */}
        <Image src={src} alt={alt} />
        {/* <Button/> */}
      </Link>
    </div>
  );
};

export default Post;
