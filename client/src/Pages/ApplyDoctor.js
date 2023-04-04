import React from 'react'
import Layout from '../Components/Layout'

const ApplyDoctor = () => {
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-3 bg-red-800">
                        <h3>This saymon </h3>
                    </div>
                    <div className="col-span-2 bg-red-700">
                        <h3>This safsa </h3>
                    </div>
                    <div className="row-span-2 col-span-2 bg-red-900">03</div>
                </div>
            </div>

        </Layout>
    )
}

export default ApplyDoctor