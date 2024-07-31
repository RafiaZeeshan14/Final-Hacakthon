import axios from "axios";
const baseURL = "http://localhost:5000/"

const handleRegister = async (formData, navigate) => {
    // console.log("...in handle api", formData)
    try {
        await axios.post(`${baseURL}user`,
            formData
        );
        navigate('/')
    } catch (error) {
        console.error('Registration error:', error);
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
            alert('no user found')
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
        alert("token not available")
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
            alert("Token not available");
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
            // console.log("🚀 ~ generateVoucher ~ res:", res.data.data);
        }

    } catch (error) {
        console.error('Error generating voucher:', error.response.data.message);
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

export {
    handleRegister,
    handleLogin,
    fetchUser,
    generateVoucher,
    getVouchers
}