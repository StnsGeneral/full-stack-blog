import { Link } from "react-router-dom";
import Image from "./../Components/Image";
import PostMenuActions from "./../Components/PostMenuActions";
import Search from "./../Components/Search";
import Comments from './../Components/Comments';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et
            libero obcaecati nulla vel ullam, ea laudantium.
          </h1>
          <div className='flex items-center text-sm gap-2 text-gray-400'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            vel illo quibusdam eius magnam, minus iure nobis quasi soluta. Ullam
            ab quas facere enim sequi odio magnam autem quos nam?
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src='postImg.jpeg' w='600' className='rounded-2xl' />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            consectetur, autem magnam amet deserunt sed, architecto ducimus
            inventore quos doloribus incidunt repudiandae laborum animi! Illum
            autem itaque nemo eum sit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus, aspernatur. Veniam, iusto! Eaque quae
            culpa iste modi nisi libero harum corporis atque hic pariatur.
            Voluptatum sint ut consectetur quibusdam id! Unde cumque suscipit
            necessitatibus voluptate eveniet ea iure. Earum, porro! Molestiae
            harum vero modi iste enim qui quisquam fuga quas obcaecati beatae!
            Quisquam, eveniet! Obcaecati minima eveniet perferendis quos
            aliquam! Maiores pariatur dolorem, ea dolore aspernatur amet vero,
            iure distinctio numquam omnis dolorum id libero accusamus facilis
            delectus recusandae sequi, repellendus molestias! Nostrum doloribus
            ducimus atque obcaecati porro, provident alias. Nihil quam eveniet,
            eligendi consequuntur, voluptatum adipisci atque doloribus voluptate
            rerum repellat sapiente quisquam modi culpa! Animi praesentium
            placeat ad illum error recusandae earum eos. Illo esse reprehenderit
            exercitationem eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem ut quae a cum animi dolor, omnis, non natus aperiam
            earum et voluptate harum eveniet! Nisi facilis repudiandae officiis
            fugit rerum! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Inventore laboriosam animi magni eius suscipit, facilis ullam,
            qui modi delectus maiores similique voluptatibus ratione tempora rem
            architecto quam veniam nemo cupiditate? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ex accusamus similique recusandae
            accusantium impedit fuga. Magnam iusto quos consequuntur
            voluptatibus nemo animi optio adipisci unde iure atque, pariatur
            ratione amet. Blanditiis, architecto. Mollitia dolorem quis incidunt
            nisi debitis labore, est quas officiis dolor quaerat beatae? Quam
            possimus qui ex quis fugit hic exercitationem, unde dicta, modi
            velit dolorum veritatis maiores! Placeat id facilis, quo accusamus a
            beatae repellat nesciunt dignissimos pariatur laboriosam, quae ipsa,
            quisquam consectetur? Non, beatae. Nisi voluptate odio vitae
            consectetur numquam provident, ullam natus velit aliquid quas! Et
            fuga illum suscipit harum nostrum libero commodi corporis
            perspiciatis corrupti odio est quos, consectetur minus
            necessitatibus eos nulla eligendi iure quam nam tempore at. Error
            inventore veniam aperiam blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem ut quae a cum animi dolor, omnis, non natus aperiam
            earum et voluptate harum eveniet! Nisi facilis repudiandae officiis
            fugit rerum! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Inventore laboriosam animi magni eius suscipit, facilis ullam,
            qui modi delectus maiores similique voluptatibus ratione tempora rem
            architecto quam veniam nemo cupiditate? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ex accusamus similique recusandae
            accusantium impedit fuga. Magnam iusto quos consequuntur
            voluptatibus nemo animi optio adipisci unde iure atque, pariatur
            ratione amet. Blanditiis, architecto. Mollitia dolorem quis incidunt
            nisi debitis labore, est quas officiis dolor quaerat beatae? Quam
            possimus qui ex quis fugit hic exercitationem, unde dicta, modi
            velit dolorum veritatis maiores! Placeat id facilis, quo accusamus a
            beatae repellat nesciunt dignissimos pariatur laboriosam, quae ipsa,
            quisquam consectetur? Non, beatae. Nisi voluptate odio vitae
            consectetur numquam provident, ullam natus velit aliquid quas! Et
            fuga illum suscipit harum nostrum libero commodi corporis
            perspiciatis corrupti odio est quos, consectetur minus
            necessitatibus eos nulla eligendi iure quam nam tempore at. Error
            inventore veniam aperiam blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem ut quae a cum animi dolor, omnis, non natus aperiam
            earum et voluptate harum eveniet! Nisi facilis repudiandae officiis
            fugit rerum! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Inventore laboriosam animi magni eius suscipit, facilis ullam,
            qui modi delectus maiores similique voluptatibus ratione tempora rem
            architecto quam veniam nemo cupiditate? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ex accusamus similique recusandae
            accusantium impedit fuga. Magnam iusto quos consequuntur
            voluptatibus nemo animi optio adipisci unde iure atque, pariatur
            ratione amet. Blanditiis, architecto. Mollitia dolorem quis incidunt
            nisi debitis labore, est quas officiis dolor quaerat beatae? Quam
            possimus qui ex quis fugit hic exercitationem, unde dicta, modi
            velit dolorum veritatis maiores! Placeat id facilis, quo accusamus a
            beatae repellat nesciunt dignissimos pariatur laboriosam, quae ipsa,
            quisquam consectetur? Non, beatae. Nisi voluptate odio vitae
            consectetur numquam provident, ullam natus velit aliquid quas! Et
            fuga illum suscipit harum nostrum libero commodi corporis
            perspiciatis corrupti odio est quos, consectetur minus
            necessitatibus eos nulla eligendi iure quam nam tempore at. Error
            inventore veniam aperiam blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem ut quae a cum animi dolor, omnis, non natus aperiam
            earum et voluptate harum eveniet! Nisi facilis repudiandae officiis
            fugit rerum! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Inventore laboriosam animi magni eius suscipit, facilis ullam,
            qui modi delectus maiores similique voluptatibus ratione tempora rem
            architecto quam veniam nemo cupiditate? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ex accusamus similique recusandae
            accusantium impedit fuga. Magnam iusto quos consequuntur
            voluptatibus nemo animi optio adipisci unde iure atque, pariatur
            ratione amet. Blanditiis, architecto. Mollitia dolorem quis incidunt
            nisi debitis labore, est quas officiis dolor quaerat beatae? Quam
            possimus qui ex quis fugit hic exercitationem, unde dicta, modi
            velit dolorum veritatis maiores! Placeat id facilis, quo accusamus a
            beatae repellat nesciunt dignissimos pariatur laboriosam, quae ipsa,
            quisquam consectetur? Non, beatae. Nisi voluptate odio vitae
            consectetur numquam provident, ullam natus velit aliquid quas! Et
            fuga illum suscipit harum nostrum libero commodi corporis
            perspiciatis corrupti odio est quos, consectetur minus
            necessitatibus eos nulla eligendi iure quam nam tempore at. Error
            inventore veniam aperiam blanditiis.
          </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
          <div className='flex items-center gap-8'>
            <Image
              src='userImg.jpeg'
              className='w-12 h-12 rounded-full object-cover'
              w='48'
              h='48'
            />
            <Link className="text-blue-800">John Doe</Link>
          </div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-2'>
              <Link>
                <Image src='facebook.svg' />
              </Link>
              <Link>
                <Image src='instagram.svg' />
              </Link>
            </div>
            </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'> All</Link>
            <Link to='/' className='underline'>
              Web Design
            </Link>
            <Link to='/' className='underline'>
              Development
            </Link>
            <Link to='/' className='underline'>
              Databases
            </Link>
            <Link to='/' className='underline'>
              Search Engines
            </Link>
            <Link to='/' className='underline'>
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
