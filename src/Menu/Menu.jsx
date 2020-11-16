import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function Menu() {
    const menuItem =[{
                    "foodITem": 'Shrimp',
                    "price" : '$11.99'
                },{
                    "foodITem": 'Steak',
                    "price" : '$8.99'
                },{
                    "foodITem": 'Chicken Wings',
                    "price" : '$5.99'
                }];
    return (
        <div className="menuPage">
            <h2>Menu</h2>
            <p>Below are Menu options to choose from.</p>
            <table>
            <tbody>
            {menuItem.map(function (d, idx) {
                return (
                            <tr>
                                <td>
                                    {d.foodITem}
                                </td>
                                <td>
                                    {d.price}
                                </td>
                                <td>
                                    <button className="cartBtn">Add To Cart</button>
                                </td>
                            </tr>
                       )
            })}
             </tbody>
             </table>
        </div>
    );
}
export { Menu };