import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { toast } from "react-toastify";
const baseURL = "http://localhost:5000/"

const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY

const handleRegister = async (formData, navigate) => {
    console.log("...in handle api", formData)
    try {
        await axios.post(`${baseURL}user`,
            formData
        );
        navigate('/')
    } catch (err) {
        toast.error(err.response.data.message)

    }
};

const handleLogin = async (email, password, navigate, setUser) => {
    console.log(email, password)
    try {
        const res = await axios.post(`${baseURL}user/login`, {
            email,
            password,
        });
        // console.log("🚀 ~ handleLogin ~ res:", res.data.token)
        // console.log("🚀 ~ handleLogin ~ res:", res.data.data)
        // console.log("🚀 ~ handleLogin ~ res:", res.data)
        const token = res.data.token
        const pref = res.data.data
        console.log("🚀 ~ handleLogin ~ pref:", pref)
        if (token) {
            localStorage.setItem('token', token);
            if (pref === "admin") {
                await fetchUser(setUser);
                navigate('/Admin-dashboard');
            } else {
                await fetchUser(setUser);
                navigate('/dashboard');
            }
        } else {
            toast.error('no user found')
            // navigate('/signup')
        }
    } catch (error) {
        console.error('Login error:', error);
    }
};

const fetchUser = async (setUser) => {
    const token = localStorage.getItem('token');
    // console.log("🚀 ~ useEffect ~ token:", token)
    if (!token) {
        toast.error("token not available")
        // console.log("token not available")
        // navigate('/');
    }
    else {
        await axios.get(`${baseURL}user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                // console.log('res from dashboard ===>', res.data.data)
                setUser(res.data.data)
            }
            )
            .catch(error => {
                console.error('Error fetching user:', error);
                // navigate('/');
            });
    }
}

const generateVoucher = async (user, setAllVoucher, allVoucher, setCurrentVoucher) => {
    // console.log(user)
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("Token not available");
        } else {
            const res = await axios.post(`${baseURL}voucher/generate`,
                user,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            setCurrentVoucher(res.data.data)
            setAllVoucher([...allVoucher, res.data.data])
            toast.success("Voucher generated successfully!");
            // console.log("🚀 ~ generateVoucher ~ res:", res.data.data);
        }

    } catch (err) {
        if (err.response && err.response.status === 400) {
            toast.error(err.response.data.message);
        } else {
            toast.error("Error generating voucher."); // General error message
            console.log('Error generating voucher:', err.response.data.message);
        }
    }
}


const getVouchers = async (setAllVoucher) => {
    // console.log(user)
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Token not available");
        } else {
            const res = await axios.get(`${baseURL}voucher`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            setAllVoucher(res.data)
            // console.log("🚀 ~ getVoucher ~ res:", res);
        }

    } catch (error) {
        console.error('Error fetching voucher:', error.response.data.message);
    }
}


const downloadVoucher = async (data) => {
    console.log("from handle api", data)
    try {
        const response = await axios.post(`${baseURL}generate-voucher`, {
            data
            // other data
        }, { responseType: 'blob' });

        const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'voucher.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();

    } catch (error) {
        console.log("🚀 ~ downloadVoucher ~ error:", error)
    };


}



const makePayment = async (voucher) => {
    const stripe = await loadStripe(stripePublicKey)
    console.log("🚀 ~ makePayment ~ stripe:", stripe)

    const res = await axios.post(`${baseURL}stripe/create-checkout-session`, {
        voucher
    })
    console.log("🚀 ~ makePayment ~ res:", res.data.id)

    const session = res.data.id
    const result = stripe.redirectToCheckout({
        sessionId: session
    })
    if (result.error) {
        console.log(result.error)
    }

}

const updateVoucherStatus = async (voucherId) => {
    try {
        await axios.put(`http://localhost:5000/voucher/${voucherId}`, { status: 'paid' }, { paymentMode: "Online" });
        console.log('Voucher status updated to paid');
    } catch (error) {
        console.error('Error updating voucher status:', error);
    }
};

const editUser = async (formData, user) => {
    // console.log("🚀 ~ editUser ~ formData,user:", formData, user)
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Token not available");
        } else {
            const res = await axios.put(
                `${baseURL}user/${user}`,
                formData, // Include the formData in the request body
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            // console.log("🚀 ~ editUser ~ res:", res.data);
            // Handle success (e.g., update UI, show a success message)
        }
    } catch (error) {
        console.error('Error updating user:', error.response?.data?.message || error.message);
        // Handle error (e.g., show an error message)
    }

}

export {
    handleRegister,
    handleLogin,
    fetchUser,
    generateVoucher,
    getVouchers,
    makePayment,
    updateVoucherStatus,
    downloadVoucher,
    editUser
}