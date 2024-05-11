import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
    const { user, loading } = useContext(AuthContext)
    const servicesData = useLoaderData();
    const { title, price, img } = servicesData;
    // handleBooking
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.pname.value;
        const price = form.price.value;
        const email = form.email.value;
        const image = form.image.value;
        const description = form.des.value;

        const productDetails = {
            productName: name,
            price,
            email,
            imageUrl: image,
            productDescription: description
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Submitted Successfully!",
                        icon: "success"
                    });
                }

            })

    }
    if (loading) {
        return <p className="w-full min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></p>
    }
    return (
        <div>
            <form onSubmit={handleBooking} className="w-3/4 mx-auto grid grid-cols-2 gap-6 bg-gray-100 p-16 my-9">
                <input className="px-4 py-2" type="text" name="pname" defaultValue={title} id="name" />
                <input className="px-4 py-2" type="text" name="price" defaultValue={'$' + price} />
                <input className="px-4 py-2" type="email" name="email" placeholder="Your Email" defaultValue={user?.email} />
                <input className="px-4 py-2" type="text" name="image" defaultValue={img} />
                <textarea className="col-span-2 px-4 py-2" name="des" id="" rows={'4'} cols={'4'} placeholder="Product description"></textarea>
                <button className="btn btn-warning col-span-2">Book Now</button>
            </form>
        </div>
    );
};

export default Checkout;