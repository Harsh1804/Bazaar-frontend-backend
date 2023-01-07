import React from 'react';

import { client } from '../../lib/client';
import { Men } from '../../components';

const Home = ({ mens }) => (
    <div>
      
      <div className="products-heading">
        <h2>Men's Collection</h2>
        <p>Express Yourself By Your Clothes!!</p>
      </div>
  
      <div className="products-container">
      {mens?.map((men) => <Men key={Men._id} men={men} />)}
      </div>
    </div>
  );
  
  export const getServerSideProps = async () => {
    const query = '*[_type == "men"]';
    const mens = await client.fetch(query);
  
    return { 
      props: { mens }
    }
  }
  
  export default Home;