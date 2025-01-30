// import React, { useState, useEffect } from "react";
// import gif from '../assets/image/gif.gif';
// import axiosInstance from "../axiosInstance";
// import { toast } from 'react-toastify';
// import { useSearchParams } from 'react-router-dom';

// const InfiniteScrollPagination = () => {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     // const [hasMore, setHasMore] = useState(true);
//     const [error, setError] = useState(false);
//     const [searchParams] = useSearchParams();

//     const page = searchParams.get('page');

//     const loadItems = async () => {
//         setLoading(true);
//         try {
//             const response = await axiosInstance.get(`/memo/get_all_memoqrcodes?page=${page}`);
//             const newItems = response?.data?.data || [];
//             console.log(newItems);
//             // if (newItems.length > 0) {
//             //     setItems((prevItems) => [ ...newItems]);
//             // }
//             setItems(newItems)
//             //  else {
//             //     setHasMore(false);
//             // }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//             toast.error(`Error fetching data: ${error.message}`);
//             setError(`Error fetching data: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         loadItems();
//     }, [page]);

//     // const handleLoadMore = () => {
//     //     if (!hasMore) return;
//     //     setLoading(true);
//     //     setPage((prevPage) => prevPage + 1);
//     // };

//     return (
//         <div className="bg-gray-200 h-screen">
//             <div className="grid grid-cols-1 bg-gray-200 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10">
//                 {items.length > 0 && items.map((item, index) => {
//                     return (
//                         <div key={index} className="rounded-lg py-2 px-1 relative">
//                             {/* <div className="text-black font-bold text-center mb-2 text-xs">Item {item.Id}</div> */}
//                             {/* <div className="absolute bottom-[2%] right-[8%] text-gray-500 text-[9px] transparent rounded-full p-1 lg:ms-[80px] font-extrabold z-50">Item {item.Id}</div> */}

//                             <div className="absolute bottom-[2%] right-[15%] lg:right-[8%] text-gray-500 text-[9px] bg-transparent rounded-full p-1 font-extrabold z-50 max-w-full">
//                                 Item {item.Id}
//                             </div>

//                             {/* <div className=" p-1 bg-[#002f6c] rounded-lg text-center relative">
//                                 <div className="h-[5px] bg-[#f26d22] rounded-t-lg"></div>
//                                 <div className="rounded-md">
//                                     <img className="object-contain" src={item?.MemQrCode} alt="QR Code" />
//                                 </div>
//                                 <span className="text-white text-[10px] font-bold block mt-1">SCAN ME</span>
//                             </div> */}


//                             {/* <div className="qr-container p-1 bg-[#002f6c] rounded-lg text-center relative">
//                                 <div className="h-[50%] bg-[#33f222] w-full absolute top-0 left-0 rounded-t-lg"></div>

//                                 <div className="relative p-1 flex items-center justify-center">
//                                     <img className="object-contain relative z-10" src={item?.MemQrCode} alt="QR" />
//                                 </div>

//                                 <span className="text-white text-1xl font-bold block mt-1 relative z-10 py-4">SCAN ME</span>
//                             </div> */}
//                             <div className="qr-container w-[270.64px] h-[313.46px] bg-[#002f6c] rounded-lg text-center relative flex flex-col items-center gap-5 p-4">
//                                 <div className="absolute top-0 left-0 w-full h-1/2 bg-[#33f222] rounded-t-lg"></div>
//                                 <div className="relative flex items-center justify-center z-10 gap-5">
//                                     <img
//                                         className="object-contain w-[236.22px] h-[236.22px]"
//                                         src={item?.MemQrCode}
//                                         alt="QR Code"
//                                     />
//                                 </div>
//                                 <span className="text-white text-lg font-bold relative z-10 py-2">
//                                     SCAN ME
//                                 </span>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>

//             {loading && (
//                 <div className="flex justify-center items-center bg-gray-200">
//                     <img src={gif} alt="Loading..." className="w-[30px] mt-10" />
//                 </div>
//             )}

//             {error && (
//                 <div className="flex justify-center items-center bg-gray-200">
//                     <p className="text-red-500">{error}</p>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default InfiniteScrollPagination;
