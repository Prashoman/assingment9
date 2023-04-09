import React from 'react';
import MenuItems from '../MenuItems/MenuItems';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const MenuCommonPage = () => {
    return (
        <div>
            <MenuItems></MenuItems>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default MenuCommonPage;