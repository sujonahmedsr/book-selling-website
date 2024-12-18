import { useEffect, useState } from "react";
import useAuth from "../Pages/providers/useAuth";
import { useAllDistrictQuery, useAllUpazilasQuery, useGetProfileQuery } from "../RTK/Fearures/getBook/getBookApi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { data: allDistricts } = useAllDistrictQuery()
    const { data: allUpazila } = useAllUpazilasQuery()
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazila, setSelectedUpazila] = useState("");
    const [errors, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setDistricts(allDistricts)
        setUpazilas(allUpazila)
    }, [allDistricts, allUpazila])

    // Filter upazilas based on selected district
    useEffect(() => {
        if (selectedDistrict) {
            const selectD = districts?.data?.find(item => item.name === selectedDistrict)
            const filtered = upazilas?.data?.filter(
                (upazila) => upazila?.district_id === Number(selectD?.id)
            );
            setFilteredUpazilas(filtered);
        } else {
            setFilteredUpazilas([]);
        }
    }, [selectedDistrict, upazilas, districts]);

    const { user: UserId } = useAuth()
    const { data: userProfile, isLoading, isError, error } = useGetProfileQuery(UserId?.id)
    const user = userProfile?.user

    // Sync form data with user profile
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        district: "",
        upazila: "",
        address: "",
        img: "",
        user_id: "",
        district_id: "",
        upazila_id: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user?.name,
                phone: user?.phone,
                email: user?.email,
                district: user?.district || "",
                district_id: user.district_id || "",
                upazila: user?.upazila || "",
                upazila_id: user.upazila_id || "",
                address: user?.address || "",
                img: user?.img || "",
                user_id: user?.id || "",
            });
            setSelectedDistrict(user.district || "");
            setSelectedUpazila(user.upazila || "");
        }
    }, [user]);


    const [preview, setPreview] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file type
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
            if (!validTypes.includes(file.type)) {
                alert("Please select a valid image type (jpg, jpeg, png, webp).");
                return;
            }

            // Check file size (e.g., max 2MB = 2 * 1024 * 1024 bytes)
            const maxSize = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSize) {
                alert("The image size must not exceed 2MB.");
                return;
            }

            // If all checks pass, read the file as Base64
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setFormData({ ...formData, img: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            alert("No file selected.");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDistrictChange = (e) => {
        const value = e.target.value;
        const district = allDistricts?.data?.find(item => item.name === value)
        setSelectedDistrict(value);
        setFormData({
            ...formData,
            district: value,
            district_id: district?.id,
            upazila: "", // Reset upazila when district changes
        });
    };

    const handleUpazilaChange = (e) => {
        const value = e.target.value;
        const upazila = allUpazila?.data?.find(item => item.name === value)
        setSelectedUpazila(value);
        setFormData({
            ...formData,
            upazila: value,
            upazila_id: upazila?.id
        });
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Updated Data:", formData);

        // Perform API call here to update the user's profile.
        try {
            const response = await axios.post(
                "https://kichukkhon.arnobghosh.me/api/userProfileUpdate",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        // Add your authentication token if required
                        Authorization: `Bearer ${UserId?.token}`,
                    },
                }
            );

            if (response.data.success) {
                console.log("Profile updated successfully:", response.data.success);
                toast("Profile updated successfully!");

                delay(1000)
                navigate('/My_Profile')
                window.location.reload()
            }

        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
            setError(error?.response?.data?.message)
            alert("Failed to update profile. Please try again.");
        }
    };

    let content = null;

    if (isLoading && !isError) content = <div role="status" className="container mx-auto border-gray-100 rounded shadow animate-pulse grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 h-[80vh]">
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>

    </div>;

    if (!isLoading && isError) content = <p className="text-red-600 h-[80vh]">Error: {error}</p>;

    if (!isLoading && isError && !user) content = <div className="text-red-600 h-[80vh]">No Data Found...</div>;
    if (!isLoading && !isError && user) content = <form onSubmit={handleSubmit} className="space-y-4 border p-5">
        <div className="text-center">
            <label htmlFor="profilePicture" className="relative cursor-pointer">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow border border-gray-300">
                    {preview ? (
                        <img
                            src={preview}
                            alt="Profile Preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                            Upload
                        </div>
                    )}
                </div>
            </label>
            <input
                type="file"
                id="profilePicture"
                accept="image/jpeg, image/jpg, image/png, image/webp" /* Only valid image types */
                className="hidden"
                onChange={handleImageChange}
            />
            <p className="text-sm text-gray-500 mt-2">Click to change picture</p>
        </div>
        {/* Name */}
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
            />
        </div>

        {/* Phone */}
        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
            </label>
            <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                readOnly
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                readOnly
                onChange={handleChange}
                placeholder="Enter email"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
        </div>

        {/* District & Upazila */}
        <div className="flex items-center justify-between gap-5 w-full">
            <select
                onChange={handleDistrictChange}
                value={selectedDistrict}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
                <option value="">Select District</option>
                {districts?.data?.map((district) => (
                    <option key={district.id} value={district.name}>
                        {district.bn_name}
                    </option>
                ))}
            </select>
            <select
                onChange={handleUpazilaChange}
                value={selectedUpazila}
                disabled={!selectedDistrict}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
                <option value="">Select Upazila</option>
                {filteredUpazilas?.map((upazila) => (
                    <option key={upazila.id} value={upazila.name}>
                        {upazila.bn_name}
                    </option>
                ))}
            </select>
        </div>

        {/* Address Area */}
        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
            </label>
            <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
            ></textarea>
        </div>

        <p className="text-red-500">{errors}</p>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
            Update Profile
        </button>
    </form>;



    return (
        <div className="container mx-auto px-4 p-5 space-y-5 md:mt-10 max-w-lg bg-white rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Update Profile
            </h2>
            {content}
        </div>
    );
};

export default UpdateProfile