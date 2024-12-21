import React, { useState, useEffect } from "react";
import gif from '../assets/image/gif.gif';
import axiosInstance from "../axiosInstance";
import {toast } from 'react-toastify';

const InfiniteScrollPagination = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadItems = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/memo/get_all_memoqrcodes?page=${page}`);
            const newItems = response?.data?.data || [];
            console.log(newItems);
            if (newItems.length > 0) {
                setItems((prevItems) => [...prevItems, ...newItems]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error fetching data");

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems();
    }, [page]);

    const handleLoadMore = () => {
        if (!hasMore) return;
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="bg-gray-200 h-screen">
            <div className="grid grid-cols-1 bg-gray-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 p-10">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="rounded-lg py-2 px-1 relative">
                            <div className="text-black font-bold text-center mb-2 text-xs">Item {item.Id}</div>
                            <div className="absolute bottom-[2%] right-[8%] text-gray-500 text-[9px] transparent rounded-full p-1 lg:ms-[80px] font-extrabold z-50">Item {item.Id}</div>
                            <img className="w-full h-auto" src={item?.MemQrCode} alt="QR Code" />

                        </div>
                    )
                })}
            </div>

            {loading && (
                <div className="flex justify-center items-center bg-gray-200">
                    <img src={gif} alt="Loading..." className="w-[30px] mt-10" />
                </div>
            )}
            {hasMore && !loading && (
                <div className="flex justify-center bg-gray-200">
                    <button onClick={handleLoadMore} className="bg-blue-900 mb-3 hover:bg-gray-900 text-white px-4 py-2 rounded">
                        Load More
                    </button>
                </div>
            )} {!hasMore && (
                <p className="text-center text-gray-700 mt-5">No more items to load</p>
            )}
        </div>
    );
};

export default InfiniteScrollPagination;
