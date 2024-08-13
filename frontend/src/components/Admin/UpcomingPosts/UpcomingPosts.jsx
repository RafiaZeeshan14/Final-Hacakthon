import React from 'react';
import { MdOutlinePostAdd } from "react-icons/md";
import AdminInfolayout from '../../Layouts/AdminInfoLayout';

const UpcomingPosts = () => {

    const posts = [
        {
            id: 1,
            title: 'New UI/UX Course',
            type: 'Social Media',
            date: '2024-08-15',
            description: 'We are excited to announce the <strong>UI/UX Designing</strong> Course available at our campus...',
            image: 'https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/451872245_122166042674153270_5144669098624301575_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JSIzskpqNmMQ7kNvgF-j0YX&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYBklF1g8ZRqojLHz3AZSo6OIAzDCeExlZqd8R7TFEPXsA&oe=66BEB854'
        },
        {
            id: 2,
            title: 'New Space Announcement',
            type: 'Social Media',
            date: '2024-08-20',
            description: 'We’re excited to announce that co-working spaces are now available at <strong>Zaitoon Ashraf</strong>...',
            image: 'https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/454495306_122170254812153270_9094404649039967837_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mHLHD2sHecEQ7kNvgEEVWGw&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYBaST8CBjbDBgagHqqdX36ZYcYSA1JcCpcwAu0hmzySIw&oe=66BEC7AC'
        },
        {
            id: 3,
            title: 'New Web Dev Course',
            type: 'Social Media',
            date: '2024-09-10',
            description: 'We are excited to announce the <strong>Web Development</strong> Course available at our campus...',
            image: 'https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/452170331_122166042920153270_7675103274640941989_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1PyMHzmGv1cQ7kNvgGLB_Dy&_nc_ht=scontent.fkhi8-1.fna&oh=00_AYDIx8fYgwt7EBs_LujBNcMEW3rmvXVujmZ2xjzRL5puug&oe=66BEBF27'
        },
        {
            id: 4,
            title: '5 Portfolio Mistakes',
            type: 'Blog',
            date: '2024-09-01',
            description: '<strong>5 Portfolio</strong> mistakes designers make...',
            image: 'https://www.smartschoolerp.com/wp-content/uploads/2023/08/Best-software-for-school-management-system-Featured.jpg'
        },
        {
            id: 5,
            title: 'AI Intelligence',
            type: 'Blog',
            date: '2024-09-06',
            description: 'Unlock the Power of <strong>AI Intelligence</strong> with these Simple Strategies...',
            image: 'https://www.smartschoolerp.com/wp-content/uploads/2023/08/new-image.jpg'
        },
        {
            id: 6,
            title: 'Tool For Ideas',
            type: 'Blog',
            date: '2024-09-13',
            description: 'The Ultimate Tool for Collecting <strong>Inspiration and Ideas</strong>...',
            image: 'https://www.smartschoolerp.com/wp-content/uploads/2023/07/Blog-15.jpg'
        },
    ];

    const socialMediaPosts = posts.filter(post => post.type === 'Social Media');
    const blogPosts = posts.filter(post => post.type === 'Blog');

    return (
        <AdminInfolayout>
            <div className="p-4 bg-transparent">
                <div className="flex items-center mb-2 border-b-2 py-5">
                    <MdOutlinePostAdd className="text-gray-600 sm:size-10 size-9" />
                    <h1 className="text-2xl sm:text-3xl font-bold sm:pl-3  pl-1 gradient-text">
                        Upcoming Post
                    </h1>
                </div>
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-600">Social Media Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {socialMediaPosts.map((post) => (
                            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                                {post.image && <img src={post.image} alt="Post" className="w-full h-32 object-cover rounded-t-lg mb-4" />}
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 mb-2"><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
                                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.description }}></p>
                                <button className="bg-gradient-to-l from-green-500 to-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-blue-500 to-green-500">
                                    Post on Facebook
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-600">Blog Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                                {post.image && <img src={post.image} alt="Post" className="w-full h-32 object-cover rounded-t-lg mb-4" />}
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 mb-2"><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
                                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.description }}></p>
                                <button className="bg-gradient-to-l from-green-500 to-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-blue-500 to-green-500">
                                    Publish Blog
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AdminInfolayout>
    );
};

export default UpcomingPosts;
