"use client";

import React from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const LandingPage: React.FC = () => {
    const [items, setItems] = useState(Array.from({ length: 300 }));


    const fetchMoreData = () => {
        setTimeout(() => {
            console.log("lOADING")
            setItems(() =>
              items.concat(Array.from({ length: 20 }))
            );
          }, 1500);
    };

    return (

        <div style={{ height: '100vh', overflow: 'auto' }}>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                style={{ display: 'flex', flexDirection: 'column',  height: '100vh' }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    {items.map((_, index) => (
                        <button key={index}>Hello World {index}</button>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default LandingPage;
