import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if(user){
        console.log(admin);
    }
    

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 mr-2 text-base-content bg-slate-400">
                        <li><Link to='/dashboard'>My Bookings</Link></li>
                        <li><Link to='/dashboard/history'>My History</Link></li>
                        {
                            admin && <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/addDonor'>Add a Donor</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;