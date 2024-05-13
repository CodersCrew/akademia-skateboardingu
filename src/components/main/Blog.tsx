<<<<<<< HEAD
import Title from './Common/Title';
import Posts from './Posts';
=======
import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import Title from './Common/Title';
import Footnote from './Footnote';
import Post from './Post';
>>>>>>> b0078f7c2b8b5bd690d287867bc1fd2a35e5e513

const Blog = () => {
  return (
    <div className="h-567 border border-black">
      <Title title="BLOG:" />
      <Posts />
    </div>
  );
};

export default Blog;
