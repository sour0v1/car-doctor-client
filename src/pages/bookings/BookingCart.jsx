import React from 'react';

const BookingCart = ({ booking, handleDelete }) => {
    const { _id, productName, email, price, imageUrl } = booking;
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <button className='btn' onClick={() => handleDelete(_id)}>Delete</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
            {productName}
        </td>
        <td>{email}</td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default BookingCart;