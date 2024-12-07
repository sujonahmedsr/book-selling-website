import { useState } from "react";

const ReviewBooks = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleRatingClick = (star) => {
        setRating(star);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            rating,
            review,
            name,
            email,
        };
        console.log("Form Data:", formData);
        alert("Review Submitted!");
    };
    return (
        <div className="mt-20 space-y-5">
            <h1 className="text-sm font-semibold text-gray-600">রিভিউ এবং রেটিং</h1>

            <div className="space-y-3">
                <h1 className="text-sm text-red-500">এই বই সম্পর্কে আপনার মতামত দিন -</h1>

                <p className="text-base text-gray-600">Your email address will not be published. Required fields are marked *</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label>Your Rating</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => handleRatingClick(star)}
                                    
                                    className={`text-lg cursor-pointer ${star <= rating ? 'text-red-500': 'hover:text-red-500 text-lg text-gray-600'}`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-5">
                    <div className="w-full">
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
                    </div>

                    <div className="w-full">
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
                    </div>
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
                        className="bg-red-500 hover:bg-gray-700 duration-300 text-white border-none px-4 py-2 cursor-pointer rounded"
                    >
                        সাবমিট
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ReviewBooks;