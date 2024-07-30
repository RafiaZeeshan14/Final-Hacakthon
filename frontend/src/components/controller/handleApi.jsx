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

export {
    handleRegister,
    handleLogin,
    fetchUser,
}