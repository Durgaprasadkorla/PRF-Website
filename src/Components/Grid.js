import React from 'react'
import Card from './Card'

function Grid() {
return (
<div className="container-fluid text-center">
        <div className="row">
        <div className="col">
                <Card src="/Images/home-cupboard1.jpg" alt=""
                title="Custom Cupboards" text="Custom Cupboards are worth the cost if you have a good budget......"
                link="/Cupboards" />
        </div>
        <div className="col">
                <Card src="/Images/home-bed.jpg" alt="Bed"
                        title="Custom Beds" text="We will get to customize it for the size you want and use materials......"
                        link="/Beds" />
                
        </div>
        <div className="col">
                <Card src="/Images/home-sofa.png" alt=""
                title="Custom Sofas" text="Our team can easily customize any Sofas to fit in your home......"
                link="/Sofas" />
        </div>
        </div><hr/>
        <div className="row">
        <div className="col">
                <Card src="/Images/home-chair1.jpg" alt=""
                title="Custom Chairs" text="Custom Chairs does not necessarily mean handmade. Rather, it means that instead....."
                link="/ghj" />
        </div>
        <div className="col">
                <Card src="/Images/home-table.jpg" alt="" title="Custom Tables" text="A custom table is the Most expensive products are made by experienced artisans......" link="/ghj" />
                
        </div>
        <div className="col">
                <Card src="/Images/home-tea-table.jpg" alt="Table"
                title="Custom Tea Tables" text="We will get to customize it for the size you want and use materials......"
                link="/Teatable" />
                
        </div>
        </div>
</div>
)
}

export default Grid