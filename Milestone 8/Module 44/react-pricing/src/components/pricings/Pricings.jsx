import React, { use } from 'react';
import Cards from '../cards/Cards';


const Pricings = ({pricingpromise}) => {

    const pricingData = use(pricingpromise);
    return (
        <div>
            <h2 className='text-3xl text-center mb-10'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    pricingData.map(price => <Cards key={price.id} price={price}></Cards>)
                }
            </div>
        </div>
    );
};

export default Pricings;