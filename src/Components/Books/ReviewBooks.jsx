import axios from "axios";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import AllReview from "./AllReview";
import useAuth from "../../Pages/providers/useAuth";
import { Link } from "react-router-dom";

const ReviewBooks = ({ bookDetails }) => {
    const { user } = useAuth()
    const { id, review: bookReview } = bookDetails
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [show, setShow] = useState(false)

    const handleRatingClick = (star) => {
        setRating(star);
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            product_id: id,
            customer_id: user?.id,
            rating,
            review,
            img: user?.img,
        };

        try {
            const response = await axios.post('https://kichukkhon.arnobghosh.me/api/product-review', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response?.data?.status === "success") {
                await delay(1000)
                toast("Review Submitted!");
                setShow(!show)

            }
            window.location.reload()


        } catch (error) {
            console.log(error);
            toast("Something went wrong!");
        }
    };
    return (
        <div className="mt-20 space-y-5">
            {
                user ? <button onClick={() => setShow(!show)} className="text-sm font-semibold text-gray-600 flex gap-1 items-center  hover:text-primary duration-300"><FaRegEdit /> আপনার রিভিউটি লিখুন</button>
                    :
                    <Link to={'/signIn'}>
                        <button onClick={() => setShow(!show)} className="text-sm font-semibold text-gray-600 flex gap-1 items-center  hover:text-primary duration-300"><FaRegEdit /> আপনার রিভিউটি লিখুন</button>
                    </Link>
            }


            <div className={`space-y-3 ${show ? 'block' : 'hidden'}`}>
                <h1 className="text-sm text-primary">এই বই সম্পর্কে আপনার মতামত দিন -</h1>

                <p className="text-base text-gray-600">Your email address will not be published. Required fields are marked *</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label>Your Rating</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => handleRatingClick(star)}

                                    className={`text-lg cursor-pointer ${star <= rating ? 'text-primary' : 'hover:text-primary text-lg text-gray-600'}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                        {/* <div className="w-full">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid gray",
                                borderRadius: "4px",
                                marginTop: "5px",
                            }}
                            required
                        />
                    </div> */}

                        {/* <div className="w-full">
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid gray",
                                borderRadius: "4px",
                                marginTop: "5px",
                            }}
                            required
                        />
                    </div> */}
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="review">Your Review *</label>
                        <textarea
                            id="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid gray",
                                borderRadius: "4px",
                                marginTop: "5px",
                            }}
                            rows="4"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="bg-primary hover:bg-gray-700 duration-300 text-white border-none px-4 py-2 cursor-pointer rounded"
                    >
                        সাবমিট
                    </button>
                </form>

            </div>

            <AllReview bookReview={bookReview}></AllReview>


        </div>
    );
};

export default ReviewBooks;