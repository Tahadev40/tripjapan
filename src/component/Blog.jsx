import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 5%;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BlogCard = styled.div`
  display: flex;
  width: 48%;
  height: 150px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
  }
`;

const CardImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BlogTitle = styled.h3`
  font-size: 20px;
  color: #1a1a1a;
  margin: 0 0 8px;
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const ToggleButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color:  #6200ea;
  background-color: white;
  border: none;
  border-radius: 22px;
  border: 2px solid  #6200ea;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;

const BlogList = [
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.YB2VbGEl7OFwmcS837fFmwHaEK&pid=Api&P=0&h=220',
    title: "Sushi and Hibachi Fusion: Where to Find Osaka's Most Innovative Restaurants",
    date: 'November 2, 2024',
  },
  {
    image: 'https://tse4.mm.bing.net/th?id=OIP.-q9NnMFnjj2GRoU_TdVYpQHaEo&pid=Api&P=0&h=220',
    title: 'Where to Stay in Takayama City: Top Hotels and Ryokans',
    date: 'October 30, 2024',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.k4c_O_Yn5Gl4mdnqOz_7mQAAAA&pid=Api&P=0&h=220',
    title: 'How to Get from Shizuoka to Tokyo: 5 Best Ways to Travel',
    date: 'October 29, 2024',
  },
  {
    image: 'https://tse4.mm.bing.net/th?id=OIP.DhGMVqhYmQVTSNFRIIQezwHaEK&pid=Api&P=0&h=220',
    title: 'Why Takayama Japan Should Be on Every Traveler’s Bucket List',
    date: 'October 28, 2024',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.LQFeUzEJXnOV1VBd78Jt5gHaEK&pid=Api&P=0&h=220',
    title: 'The Best Ramen Shops in Tokyo',
    date: 'October 20, 2024',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.oyPEyg6NSaASEMBrky_mAQHaEl&pid=Api&P=0&h=220',
    title: 'Exploring Kyoto’s Hidden Temples',
    date: 'October 15, 2024',
  },
  {
    image: 'https://tse4.mm.bing.net/th?id=OIP.73IPjn97SXpKo2o1gvsNOQHaE1&pid=Api&P=0&h=220',
    title: 'A Guide to Japanese Onsen (Hot Springs)',
    date: 'October 10, 2024',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIF.ksjy4bGc8m9dDycCPNZYTA&pid=Api&P=0&h=220',
    title: 'Top 5 Sushi Spots in Tokyo',
    date: 'October 5, 2024',
  },
];

const BlogPosts = () => {
  const [visiblePosts, setVisiblePosts] = useState(4); // Start with 4 posts visible
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePosts = () => {
    if (isExpanded) {
      setVisiblePosts(4); // Show only the initial 4 posts when toggling back
    } else {
      setVisiblePosts(BlogList.length); // Show all posts when expanded
    }
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <Container>
      <Title>Popular blog posts</Title>
      <BlogGrid>
        {BlogList.slice(0, visiblePosts).map((blog, index) => (
          <BlogCard key={index}>
            <CardImage src={blog.image} alt={blog.title} />
            <CardContent>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDate>{blog.date}</BlogDate>
            </CardContent>
          </BlogCard>
        ))}
      </BlogGrid>
      <ToggleButton onClick={togglePosts}>
        {isExpanded ? 'Read less' : 'Read more'}
      </ToggleButton>
    </Container>
  );
};

export default BlogPosts;
