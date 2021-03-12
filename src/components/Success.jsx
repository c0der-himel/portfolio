import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Success = () => {
    toast.configure();

    useEffect(() => {
        toast.success('Message sent successfully');
    }, []);

    return <div></div>;
};

export default Success;
