// src/app/page.tsx
import React from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blend-darken">
      <h1 className="text-3xl font-bold mb-8 bg-blend-lighten" >Welcome to expense tracker app</h1>
      <SignedOut>
        <div className="mb-4 pl-4" >
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center ">
          <UserButton  />
          <p className="mt-2">You are signed in!</p>
        </div>
      </SignedIn>
    </div>
  );
};

export default HomePage;
