import React, { useState, useEffect } from "react";
import gif from '../assets/image/gif.gif';
import axiosInstance from "../axiosInstance";
import {toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const InfiniteScrollPagination = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);
    const [searchParams] = useSearchParams();

    const page = searchParams.get('page');

    const loadItems = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/memo/get_all_memoqrcodes?page=${page}`);
            const newItems = response?.data?.data || [];
            // if (newItems.length > 0) {
            //     setItems((prevItems) => [ ...newItems]);
            // }
            setItems(newItems)
            //  else {
            //     setHasMore(false);
            // }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error(`Error fetching data: ${error.message}`);
            setError(`Error fetching data: ${error.message}`);
        }finally{   
            setLoading(false);  
        }
    };

    useEffect(() => {
        loadItems();
    }, [page]);

    // const handleLoadMore = () => {
    //     if (!hasMore) return;
    //     setLoading(true);
    //     setPage((prevPage) => prevPage + 1);
    // };

    return (
        <div className="bg-gray-200 h-screen">
            <div className="grid grid-cols-1 bg-gray-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
                {items.length > 0 && items.map((item, index) => {
                    return (
                        <div key={index} className="rounded-lg py-2 px-1 relative">
                            {/* <div className="text-black font-bold text-center mb-2 text-xs">Item {item.Id}</div> */}
                            <div className="absolute mt-[230px] ms-[200px] text-gray-500 text-[9px] transparent rounded-full p-1 font-extrabold z-50">Item {item.Id}</div>
                            {/* <img className="w-full h-auto" src={item?.MemQrCode} alt="QR Code" /> */}
                            <div className="qr-container rounded-lg text-center relative flex flex-col items-center gap-5 p-4">
                                <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-lg"></div>
                                <div className="relative flex items-center justify-center z-10 gap-5">
                                    <img
                                        className="object-contain w-[236.22px] h-[236.22px]"
                                        src={item?.MemQrCode}
                                        alt="QR Code"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {loading && (
                <div className="flex justify-center items-center bg-gray-200">
                    <img src={gif} alt="Loading..." className="w-[30px] mt-10" />
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center bg-gray-200">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
        
        </div>
    );
};

export default InfiniteScrollPagination;
