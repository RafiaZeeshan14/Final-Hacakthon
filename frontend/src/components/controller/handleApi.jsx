import axios from "axios";
import { toast } from "react-toastify";
const baseURL = "http://localhost:5000/"

const handleRegister = async (formData, navigate) => {
    // console.log("...in handle api", formData)
    try {
        await axios.post(`${baseURL}user`,
            formData
        );
        navigate('/')
    } catch (error) {
        toast.error(error.response.data.message)
        console.log('Registration error:', error.response.data.message);
    }
};

const handleLogin = async (email, password, navigate, setUser) => {
    // console.log(email, password)
    try {
        const res = await axios.post(`${baseURL}user/login`, {
            email,
            password,
        });
        // console.log("🚀 ~ handleLogin ~ res:", res.data)
        const token = res.data.token
        // console.log("🚀 ~ handleLogin ~ token:", token)
        if (token) {
            localStorage.setItem('token', token);
            await fetchUser(setUser);
            navigate('/dashboard');
        } else {
            // alert('no user found')
            // navigate('/signup')
            toast.error('no user found')
        }
    } catch (error) {
        
        console.error(error.response);
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
            toast.error("token not available")
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

    } catch (error) {
        toast.error(error.response.data.message);
        console.log('Error generating voucher:', error.response.data.message);
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
        toast.error(error.response.data.message)
        console.error('Error fetching voucher:', error.response.data.message);
    }
}

const getPublicKey = async (setPublicKey) => {
    try {
        const res = await axios.get(`${baseURL}stripe`)
        setPublicKey(res.data.key)

        // console.log("🚀 ~ getPublicKey ~ res:", res.data.key)
    } catch {
    }

}

const makePayment = async (publicKey, loadStripe, voucher) => {
    console.log("in make payment")
    const stripe = await loadStripe(publicKey)

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
        await axios.put(`http://localhost:5000/voucher/${voucherId}`, { status: 'paid' });
        console.log('Voucher status updated to paid');
    } catch (error) {
        console.error('Error updating voucher status:', error);
    }
};

export {
    handleRegister,
    handleLogin,
    fetchUser,
    generateVoucher,
    getVouchers,
    getPublicKey,
    makePayment,
    updateVoucherStatus,
}
