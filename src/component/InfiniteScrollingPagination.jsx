import React, { useState, useEffect } from "react";
import gif from '../assets/image/gif.gif';
import axiosInstance from "../axiosInstance";

const InfiniteScrollPagination = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 100;
    const totalItems = 5000;

    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(`/memo/get_all_memoqrcodes?page=${page}`);
                const newItems = response?.data?.data;
                if (Array.isArray(newItems)) {
                    setItems((prevItems) => [...prevItems, ...newItems]);
                    const totalFetched = items.length + newItems.length;
                    setHasMore(newItems.length === pageSize && totalFetched < totalItems);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (hasMore) {
            loadItems();
        }
    }, [page]);

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-10">
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-800 p-2 rounded-lg">
                        <div className="flex justify-center items-center">
                            <img className="w-full h-auto" src={item?.MemQrCode} alt="QR Code" />
                        </div>
                    </div>
                ))}
            </div>


            {loading &&
                <div className="flex justify-center items-center">
                    <img src={gif} alt="Loading..." className="w-[50px] mt-10" />
                </div>
            }

            {!loading && hasMore && (
                <div className="flex justify-center mt-5">
                    <button onClick={handleLoadMore} className="bg-blue-900 mb-3 text-white px-4 py-2 rounded">
                        Load More
                    </button>
                </div>
            )}

            {!hasMore && <p>No more items to load</p>}
        </div>
    );
};

export default InfiniteScrollPagination;
