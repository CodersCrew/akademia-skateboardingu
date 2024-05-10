import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import Title from './Common/Title';
import Footnote from './Footnote';
import Post from './Post';

const Blog = () => {
  const blogData = [
    {
      href: '/sets/beginner',
      src: photoMain_1,
      alt: 'photoMain_1'
    },
    {
      href: '/sets/advanced',
      src: photoMain_2,
      alt: 'photoMain_2'
    },
    {
      href: '/sets/beginner',
      src: photoMain_3,
      alt: 'photoMain_1'
    }
  ];
  return (
    <div className="h-567">
      <Title title="BLOG:" />
      <div className="h-489 m-20 flex items-center justify-center space-x-20 ">
        {blogData.map((element, index) => (
          <Post key={element.alt} {...element} alt={`photo-${index + 1}`} />
        ))}
      </div>
      <Footnote />
    </div>
  );
};

export default Blog;
