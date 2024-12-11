import profile from '../../assets/Img/profile.png'
const AllReview = ({bookReview}) => {
    return (
        <div>
            <h1>Review ({bookReview?.length})</h1>
            {
                bookReview?.length > 0 ? bookReview.map(review => <div key={review?.id} className="flex gap-3 p-5 border mt-5">
                    <img className='rounded-full h-12 w-12' src={profile} alt="profile" />
                    <div className='space-y-1'>
                        <h1 className='text-base font-semibold text-gray-700'>User Name <span className='text-[12px] font-thin'>{new Date(review?.created_at).toLocaleDateString()}</span></h1>
                        {
                            [...Array(review?.rating)].map((_, index) => <span key={index}>★</span>)
                        }
                        <p className='text-sm text-gray-700'>{review?.review}</p>
                    </div>
                </div>)  : null
            }
        </div>
    );
};

export default AllReview;