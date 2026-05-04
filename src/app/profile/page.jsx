'use client';
import { UpdateModal } from '@/components/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  return (
    <div>
      <Card className='max-w-200 mx-auto flex flex-col items-center'>
        <Avatar>
          <Avatar.Image 
          height={40}
          width={40}
          alt='John Doe'
          src='user?.image'
          refererPolicy='no-referrer'
          />
          <Avatar.Fallback>{user?.name.charAt[0]}</Avatar.Fallback>
        </Avatar>

        <h2 className='text-xl font-bold'>{user?.name}</h2>
        <p className=''>{user?.email}</p>

        <UpdateModal ></UpdateModal>
      </Card>
    </div>
  );
};

export default ProfilePage;