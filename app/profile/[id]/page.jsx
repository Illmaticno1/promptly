'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`);
      const posts = await res.json();
      setUserPosts(posts);
    };

    if (params.id) fetchUserPosts();
  }, [params.id]);

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name}'s profile page. Feel free to copy and edit these prompts as needed.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
