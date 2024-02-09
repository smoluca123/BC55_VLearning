import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../../components/Loading/slices/loadingSlice';
import { Footer } from '../../../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollTop from '../../../components/ScrollTop';

export default function MainLayout() {
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);
  }, []);
  return (
    <div className="">
      {isLoading && <Loading />}
      <Header />
      <div className="pt-[80px] z-[-1]">
        <Outlet />
      </div>
      <Footer />
      <ScrollTop />
      <Toaster position="top-right" />
    </div>
  );
}
