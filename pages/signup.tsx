import type { NextPage } from 'next';
import * as gtag from '@/lib/gtag';
import { useRef } from 'react';
import Head from 'next/head';

const Signup: NextPage = () => {
  const value = useRef<number>(0);
  const onClickSignUp = () => {
    gtag.event({
      action: '회원가입을 했습니다.',
      category: '회원가입',
      label: '회원가입',
      value,
    });
    value.current = value.current + 1;
    console.log(value.current);
  };

  return (
    <>
      {' '}
      <Head>
        <title>회원가입</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>회원가입</div>
      <button onClick={onClickSignUp}>회원가입 버튼 !!!!</button>
    </>
  );
};

export default Signup;
