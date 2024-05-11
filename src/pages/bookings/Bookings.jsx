import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingCart from './BookingCart';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, [url])
    // handleDelete
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method :'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                          const remaining =  bookings.filter(booking => booking._id !== id)
                          setBookings(remaining);
                        }
                    })
                
            }
        });

    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                {
                    bookings.map(booking => <BookingCart booking={booking} handleDelete = {handleDelete} key={booking._id}></BookingCart>)
                }
            </div >
        </div>
    );
};

export default Bookings;