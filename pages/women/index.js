import React from 'react';

import { client } from '../../lib/client';
import { Women } from '../../components';

const Home = ({ womens }) => (
    <div>
      
      <div className="products-heading">
        <h2>Women Collection</h2>
        <p>Express Yourself By Your Clothes!!</p>
      </div>
  
      <div className="products-container">
        {womens?.map((women) => <Women key={Women._id} women={women} />)}
      </div>
    </div>
  );
  
  export const getServerSideProps = async () => {
    const query = '*[_type == "women"]';
    const womens = await client.fetch(query);
  
    return { 
      props: { womens }
    }
  }
  
  export default Home;