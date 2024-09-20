import React, { useState, useEffect } from "react";
import gif from '../assets/image/gif.gif';
import axiosInstance from "../axiosInstance";

const InfiniteScrollPagination = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadItems = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/memo/get_all_memoqrcodes?page=${page}`);
            const newItems = response?.data?.data;
            if (Array.isArray(newItems) && newItems.length>0) {
                setItems((prevItems) => [...prevItems, ...newItems]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        if (hasMore) {
            loadItems();
        }
    }, [page]);

    const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="bg-gray-200">
            <div className="grid grid-cols-1 bg-gray-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-10">
                {items.map((item, index) => (
                    <div key={index} className=" p-2 rounded-lg">
                        <div className="text-black font-bold text-center mb-2">Item {item.Id}</div>
                        <div className="flex justify-center items-center">
                            <img className="w-full h-auto" src={item?.MemQrCode} alt="QR Code" />
                        </div>
                    </div>
                ))}
            </div>


            {loading &&
                <div className="flex justify-center items-center bg-gray-200 h-screen">
                    <img src={gif} alt="Loading..." className="w-[50px] mt-10" />
                </div>
            }

            {(!loading && hasMore ) && (
                <div className="flex justify-center mt-5 bg-gray-200">
                    <button onClick={handleLoadMore} className="bg-blue-900 mb-3 hover:bg-gray-900 text-white px-4 py-2 rounded">
                        Load More
                    </button>
                </div>
            )}

            {!hasMore && <p>No more items to load</p>}
        </div>
    );
};

export default InfiniteScrollPagination;
